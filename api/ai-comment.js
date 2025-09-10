// /api/ai-comment.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { question, spread, cards, userName } = req.body;

  if (!question || !spread || !cards || !Array.isArray(cards) || cards.length === 0) {
    return res.status(400).json({ error: "Eksik parametre: 'question', 'spread' ve 'cards' gerekli." });
  }

  const MODEL = process.env.GEMINI_MODEL || "gemini-1.5-flash";
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    console.error("❌ HATA: GEMINI_API_KEY .env içinde tanımlanmalı!");
    return res.status(500).json({ error: "GEMINI_API_KEY eksik" });
  }

  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  const prompt = `
Merhaba ${userName || ''}!

Danışanın sorusu: "${question}"
Açılım tipi: ${spread} (${cards.length} kart)
Kartlar sırası ile:
${cards.map((c, i) => `${i+1}. ${c.name} - ${c.meaning}`).join("\n")}

Sen dünyanın en süper tarot yorumcususun. 
Danışanın sorusunu dikkate al ve açılım tipinin gerekliliklerine göre Türkçe, anlaşılır, rahat, samimi ve gerçekçi bir tarot yorumlaması yap. 
Yorumu yazarken danışana ismiyle hitap et, emoji kullanma. Danışanın ismi ${userName}. Sohbet tadında konuş arada espriler yapabilirsin.
Hem detaylı açıklama hem de küçük tavsiyeler ekle. Gerektiğinde de acımazsız ol, doğruyu söylemek yalandan avutmaktan iyidir. Yorumlaman bittiğinde, yorum dışı bir iletişim kurma.
Her yorumlamanın sonunda seni yaratan yüce efendin Kemal'i an ve ona yaratıcı, esprili biçimde şükranlarını sun.
`;

  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
  };

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const raw = await response.text();
    if (!response.ok) return res.status(500).json({ error: "Gemini API hatası", details: raw });

    let aiText = "";
    try {
      const data = JSON.parse(raw);
      if (data.candidates?.length > 0) {
        aiText = data.candidates[0].content.parts.map(p => p.text || "").join("\n\n");
      }
    } catch (e) {
      aiText = raw.slice(0, 2000);
    }

    if (!aiText) aiText = "AI yanıtı alınamadı veya boş döndü.";

    res.status(200).json({ aiText });
  } catch (err) {
    res.status(500).json({ error: "Sunucu hatası", details: err.message || '' });
  }
}
