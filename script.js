const cardsData = [
    // Major Arcana (Büyük Arkana)
    { name: 'Joker', image: 'assets/cards/00-TheFool.jpg', meaning: 'Yeni başlangıçlar, masumiyet, macera.' },
    { name: 'Büyücü', image: 'assets/cards/01-TheMagician.jpg', meaning: 'Yetenek, güç, yaratıcılık.' },
    { name: 'Azize', image: 'assets/cards/02-TheHighPriestess.jpg', meaning: 'Sezgi, gizem, bilinçaltı.' },
    { name: 'İmparatoriçe', image: 'assets/cards/03-TheEmpress.jpg', meaning: 'Bereket, doğa, annelik.' },
    { name: 'İmparator', image: 'assets/cards/04-TheEmperor.jpg', meaning: 'Otorite, yapı, kontrol.' },
    { name: 'Aziz', image: 'assets/cards/05-TheHierophant.jpg', meaning: 'Gelenek, maneviyat, mentorluk.' },
    { name: 'Aşıklar', image: 'assets/cards/06-TheLovers.jpg', meaning: 'Aşk, ilişkiler, seçimler.' },
    { name: 'Savaş Arabası', image: 'assets/cards/07-TheChariot.jpg', meaning: 'Azim, zafer, irade gücü.' },
    { name: 'Güç', image: 'assets/cards/08-Strength.jpg', meaning: 'Cesaret, içsel güç, sabır.' },
    { name: 'Ermiş', image: 'assets/cards/09-TheHermit.jpg', meaning: 'Yalnızlık, iç gözlem, rehberlik.' },
    { name: 'Kader Çarkı', image: 'assets/cards/10-WheelofFortune.jpg', meaning: 'Kader, şans, dönüm noktası.' },
    { name: 'Adalet', image: 'assets/cards/11-Justice.jpg', meaning: 'Adalet, denge, gerçeklik.' },
    { name: 'Asılan Adam', image: 'assets/cards/12-TheHangedMan.jpg', meaning: 'Teslimiyet, farklı bir bakış açısı.' },
    { name: 'Ölüm', image: 'assets/cards/13-Death.jpg', meaning: 'Sonlanma, dönüşüm, yeniden doğuş.' },
    { name: 'Denge', image: 'assets/cards/14-Temperance.jpg', meaning: 'Denge, uyum, ılımlılık.' },
    { name: 'Şeytan', image: 'assets/cards/15-TheDevil.jpg', meaning: 'Esaret, bağımlılık, materyalizm.' },
    { name: 'Kule', image: 'assets/cards/16-TheTower.jpg', meaning: 'Yıkım, kaos, ani değişim.' },
    { name: 'Yıldız', image: 'assets/cards/17-TheStar.jpg', meaning: 'Umut, ilham, yenilenme.' },
    { name: 'Ay', image: 'assets/cards/18-TheMoon.jpg', meaning: 'Sezgi, yanılsama, bilinmezlik.' },
    { name: 'Güneş', image: 'assets/cards/19-TheSun.jpg', meaning: 'Neşe, başarı, aydınlanma.' },
    { name: 'Mahkeme', image: 'assets/cards/20-Judgement.jpg', meaning: 'Karar, yargılama, yeniden değerlendirme.' },
    { name: 'Dünya', image: 'assets/cards/21-TheWorld.jpg', meaning: 'Tamamlanma, başarı, bütünlük.' },

    // Minor Arcana (Küçük Arkana) - Wands (Değnekler)
    { name: 'Değnek Ası', image: 'assets/cards/Wands01.jpg', meaning: 'İlham, motivasyon, yeni projeler.' },
    { name: 'Değnek İkilisi', image: 'assets/cards/Wands02.jpg', meaning: 'Planlama, geleceğe bakış, keşif.' },
    { name: 'Değnek Üçlüsü', image: 'assets/cards/Wands03.jpg', meaning: 'Genişleme, ilerleme, büyüme.' },
    { name: 'Değnek Dörtlüsü', image: 'assets/cards/Wands04.jpg', meaning: 'Kutlama, istikrar, eve dönüş.' },
    { name: 'Değnek Beşlisi', image: 'assets/cards/Wands05.jpg', meaning: 'Rekabet, çatışma, mücadele.' },
    { name: 'Değnek Altılısı', image: 'assets/cards/Wands06.jpg', meaning: 'Zafer, tanınma, başarı.' },
    { name: 'Değnek Yedilisi', image: 'assets/cards/Wands07.jpg', meaning: 'Meydan okuma, savunma, cesaret.' },
    { name: 'Değnek Sekizlisi', image: 'assets/cards/Wands08.jpg', meaning: 'Hızlı hareket, iletişim, ani olaylar.' },
    { name: 'Değnek Dokuzlusu', image: 'assets/cards/Wands09.jpg', meaning: 'Savunma, azim, dayanıklılık.' },
    { name: 'Değnek Onlusu', image: 'assets/cards/Wands10.jpg', meaning: 'Yük, sorumluluk, ağır iş.' },
    { name: 'Değnek Prensi', image: 'assets/cards/Wands11.jpg', meaning: 'Yeni fikirler, yaratıcı enerji, ilham.' },
    { name: 'Değnek Şövalyesi', image: 'assets/cards/Wands12.jpg', meaning: 'Eylem, macera, tutku.' },
    { name: 'Değnek Kraliçesi', image: 'assets/cards/Wands13.jpg', meaning: 'Enerji, karizma, bağımsızlık.' },
    { name: 'Değnek Kralı', image: 'assets/cards/Wands14.jpg', meaning: 'Liderlik, vizyon, güç.' },

    // Minor Arcana (Küçük Arkana) - Cups (Kupalar)
    { name: 'Kupa Ası', image: 'assets/cards/Cups01.jpg', meaning: 'Duygusal başlangıçlar, yeni ilişkiler.' },
    { name: 'Kupa İkilisi', image: 'assets/cards/Cups02.jpg', meaning: 'Ortaklık, karşılıklı çekim, sevgi.' },
    { name: 'Kupa Üçlüsü', image: 'assets/cards/Cups03.jpg', meaning: 'Kutlama, dostluk, birliktelik.' },
    { name: 'Kupa Dörtlüsü', image: 'assets/cards/Cups04.jpg', meaning: 'Tükenmişlik, fırsatları kaçırmak, ilgisizlik.' },
    { name: 'Kupa Beşlisi', image: 'assets/cards/Cups05.jpg', meaning: 'Pişmanlık, kayıp, keder.' },
    { name: 'Kupa Altılısı', image: 'assets/cards/Cups06.jpg', meaning: 'Geçmiş, anılar, çocukluk.' },
    { name: 'Kupa Yedilisi', image: 'assets/cards/Cups07.jpg', meaning: 'Hayaller, seçimler, yanılsamalar.' },
    { name: 'Kupa Sekizlisi', image: 'assets/cards/Cups08.jpg', meaning: 'Ayrılık, arayış, yeni yol.' },
    { name: 'Kupa Dokuzlusu', image: 'assets/cards/Cups09.jpg', meaning: 'Dileklerin gerçekleşmesi, memnuniyet.' },
    { name: 'Kupa Onlusu', image: 'assets/cards/Cups10.jpg', meaning: 'Ahenk, mutluluk, aile.' },
    { name: 'Kupa Prensi', image: 'assets/cards/Cups11.jpg', meaning: 'Duygusal haberler, yaratıcılık.' },
    { name: 'Kupa Şövalyesi', image: 'assets/cards/Cups12.jpg', meaning: 'Romantik teklif, hayal gücü.' },
    { name: 'Kupa Kraliçesi', image: 'assets/cards/Cups13.jpg', meaning: 'Duygusallık, şefkat, sezgi.' },
    { name: 'Kupa Kralı', image: 'assets/cards/Cups14.jpg', meaning: 'Duygusal kontrol, bilgelik.' },

    // Minor Arcana (Küçük Arkana) - Swords (Kılıçlar)
    { name: 'Kılıç Ası', image: 'assets/cards/Swords01.jpg', meaning: 'Zihinsel açıklık, yeni fikirler.' },
    { name: 'Kılıç İkilisi', image: 'assets/cards/Swords02.jpg', meaning: 'Kararsızlık, denge arayışı.' },
    { name: 'Kılıç Üçlüsü', image: 'assets/cards/Swords03.jpg', meaning: 'Keder, kalp kırıklığı, ayrılık.' },
    { name: 'Kılıç Dörtlüsü', image: 'assets/cards/Swords04.jpg', meaning: 'Dinlenme, iyileşme, meditasyon.' },
    { name: 'Kılıç Beşlisi', image: 'assets/cards/Swords05.jpg', meaning: 'Yenilgi, anlaşmazlık, kayıp.' },
    { name: 'Kılıç Altılısı', image: 'assets/cards/Swords06.jpg', meaning: 'Geçiş, zorluktan uzaklaşma, seyahat.' },
    { name: 'Kılıç Yedilisi', image: 'assets/cards/Swords07.jpg', meaning: 'Gizlilik, aldatma, taktikler.' },
    { name: 'Kılıç Sekizlisi', image: 'assets/cards/Swords08.jpg', meaning: 'Kısıtlama, engellenmiş hissetme, korku.' },
    { name: 'Kılıç Dokuzlusu', image: 'assets/cards/Swords09.jpg', meaning: 'Endişe, kabuslar, acı.' },
    { name: 'Kılıç Onlusu', image: 'assets/cards/Swords10.jpg', meaning: 'Sonlanma, yıkım, yeni bir başlangıç.' },
    { name: 'Kılıç Prensi', image: 'assets/cards/Swords11.jpg', meaning: 'Yeni fikirler, merak, konuşma.' },
    { name: 'Kılıç Şövalyesi', image: 'assets/cards/Swords12.jpg', meaning: 'Hızlı hareket, hırs, cesaret.' },
    { name: 'Kılıç Kraliçesi', image: 'assets/cards/Swords13.jpg', meaning: 'Bağımsızlık, dürüstlük, netlik.' },
    { name: 'Kılıç Kralı', image: 'assets/cards/Swords14.jpg', meaning: 'Mantık, otorite, entelektüellik.' },

    // Minor Arcana (Küçük Arkana) - Pentacles (Paralar)
    { name: 'Tılsım Ası', image: 'assets/cards/Pentacles01.jpg', meaning: 'Finansal fırsatlar, yeni iş.' },
    { name: 'Tılsım İkilisi', image: 'assets/cards/Pentacles02.jpg', meaning: 'Dengeleme, esneklik, değişim.' },
    { name: 'Tılsım Üçlüsü', image: 'assets/cards/Pentacles03.jpg', meaning: 'İşbirliği, yetenek geliştirme, ekip çalışması.' },
    { name: 'Tılsım Dörtlüsü', image: 'assets/cards/Pentacles04.jpg', meaning: 'Güvenlik, birikim, kontrol.' },
    { name: 'Tılsım Beşlisi', image: 'assets/cards/Pentacles05.jpg', meaning: 'Yoksulluk, kayıp, zorluk.' },
    { name: 'Tılsım Altılısı', image: 'assets/cards/Pentacles06.jpg', meaning: 'Cömertlik, hayırseverlik, alma-verme.' },
    { name: 'Tılsım Yedilisi', image: 'assets/cards/Pentacles07.jpg', meaning: 'Sabır, yatırım, sonuçları beklemek.' },
    { name: 'Tılsım Sekizlisi', image: 'assets/cards/Pentacles08.jpg', meaning: 'Çalışkanlık, zanaat, beceri geliştirme.' },
    { name: 'Tılsım Dokuzlusu', image: 'assets/cards/Pentacles09.jpg', meaning: 'Bağımsızlık, lüks, başarı.' },
    { name: 'Tılsım Onlusu', image: 'assets/cards/Pentacles10.jpg', meaning: 'Zenginlik, miras, aile.' },
    { name: 'Tılsım Prensi', image: 'assets/cards/Pentacles11.jpg', meaning: 'Yeni fırsatlar, öğrenme, finansal haberler.' },
    { name: 'Tılsım Şövalyesi', image: 'assets/cards/Pentacles12.jpg', meaning: 'Sorumluluk, çalışkanlık, pratiklik.' },
    { name: 'Tılsım Kraliçesi', image: 'assets/cards/Pentacles13.jpg', meaning: 'Besleme, pratiklik, rahatlık.' },
    { name: 'Tılsım Kralı', image: 'assets/cards/Pentacles14.jpg', meaning: 'Başarı, refah, güvenlik.' },
];



const startButton = document.getElementById('start-button');
const introScreen = document.getElementById('intro-screen');
const questionScreen = document.getElementById('question-screen');
const spreadScreen = document.getElementById('spread-screen');
const cardArea = document.getElementById('card-area');
const cardDeck = document.getElementById('card-deck');
const resultArea = document.getElementById('result-area');
const cardNameEl = document.getElementById('card-name');
const cardMeaningEl = document.getElementById('card-meaning');
const aiResponseEl = document.getElementById('ai-response');
const retryButton = document.getElementById('retry-button');
const shuffleSound = document.getElementById('shuffle-sound');
const submitQuestionBtn = document.getElementById('submit-question');
const userQuestionInput = document.getElementById('user-question');
const userNameInput = document.getElementById('user-name');
const speakBtn = document.getElementById('speak-button');

// Yeni eklenen elemanlar
const aiPanel = document.getElementById('ai-panel');
const loadingEl = document.getElementById('loading-dots');
const speechBtns = document.getElementById('speech-buttons');


const numberOfCards = cardsData.length;
let userName = "";
let deckReady = false;
let userQuestion = "";
let selectedSpread = null;
let spreadCardLimit = 1;
let chosenCards = [];
let spreadPlaced = false;

const spreadPositions = {
    single: [{ x: 50, y: 50 }],
    three: [{ x: 35, y: 50 }, { x: 50, y: 50 }, { x: 65, y: 50 }],
    celtic: [
        { x: 50, y: 50 },
        { x: 50, y: 30 },
        { x: 50, y: 70 },
        { x: 35, y: 50 },
        { x: 65, y: 50 },
        { x: 35, y: 30 },
        { x: 65, y: 30 },
        { x: 35, y: 70 },
        { x: 65, y: 70 },
        { x: 50, y: 90 }
    ],
    love: [
        { x: 50, y: 40 },
        { x: 45, y: 50 },
        { x: 55, y: 50 },
        { x: 40, y: 60 },
        { x: 60, y: 60 }
    ]
};

// --- Yardımcı Fonksiyonlar ---
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- Desteyi oluştur ---
function createDeck() {
    cardDeck.innerHTML = '';
    const shuffledCards = shuffle([...cardsData]);

    for (let i = 0; i < numberOfCards; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('tarot-card');
        cardElement.dataset.name = shuffledCards[i].name;
        cardElement.dataset.meaning = shuffledCards[i].meaning;
        cardElement.dataset.image = shuffledCards[i].image;
        cardElement.dataset.state = 'closed';
        cardElement.style.pointerEvents = 'none';

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardElement.appendChild(cardBack);

        const cardFront = document.createElement('img');
        cardFront.src = cardElement.dataset.image;
        cardElement.appendChild(cardFront);

        cardElement.style.transform = `translate(${window.innerWidth / 2 - 60}px, ${window.innerHeight / 2 - 100}px) rotate(0deg)`;

        cardDeck.appendChild(cardElement);
    }

    const deckTopCard = cardDeck.lastChild;
    deckTopCard.style.pointerEvents = 'auto';
    deckTopCard.addEventListener('click', distributeDeck);
    deckReady = true;
}

// --- Desteyi dağıt ---
function distributeDeck() {
    if (!deckReady) return;
    deckReady = false;

    shuffleSound.currentTime = 0;
    shuffleSound.play();

    const allCards = Array.from(cardDeck.children);
    allCards.forEach((card, i) => {
        card.style.pointerEvents = 'none';
        setTimeout(() => {
            const randomX = Math.random() * (window.innerWidth - 150);
            const randomY = Math.random() * (window.innerHeight - 250);
            const randomRotate = Math.random() * 60 - 30;
            card.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
            card.style.pointerEvents = 'auto';
            card.addEventListener('click', handleCardClick);
        }, i * 6);
    });
}


// --- Kart seçimi ---
function handleCardClick(event) {
    const card = event.currentTarget;

    if (!spreadPlaced) {
        // --- Seçim aşaması ---
        if (card.classList.contains('selected')) return;
        if (chosenCards.length >= spreadCardLimit) return;

        card.classList.add('selected', 'flipped');
        card.dataset.state = 'opened';

        const label = document.createElement('div');
        label.classList.add('card-label');
        label.innerText = chosenCards.length + 1;
        card.appendChild(label);

        chosenCards.push({ cardEl: card, name: card.dataset.name, meaning: card.dataset.meaning });

        if (chosenCards.length === spreadCardLimit) {
            distributeSelectedSpread();
            spreadPlaced = true;
            // Artık AI yorumu kartlar çevrildikten sonra yapılacak
        }
    } else {
        // --- Açılım aşaması ---
        if (!card.classList.contains('revealed')) {
            card.classList.add('revealed');

            const currentTransform = card.style.transform || '';
            card.style.transition = 'transform 0.8s ease';
            card.style.transform = currentTransform + ' rotateY(180deg)';

            const cData = chosenCards.find(c => c.cardEl === card);
            if (cData) showCardMeaning(cData);

            // AI yorumunu yalnızca tüm kartlar açıldıysa çağır
            if (chosenCards.every(c => c.cardEl.classList.contains('revealed'))) {
                fetchAIComment(userQuestion, selectedSpread, chosenCards, userName);
            }
        }
    }
}




function showCardMeaning(cardData) {
}

// --- Kartları açılım pozisyonuna taşı ---
function distributeSelectedSpread() {
    const positions = spreadPositions[selectedSpread];
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    chosenCards.forEach((c, i) => {
        const pos = positions[i];
        if (!pos) return;
        const card = c.cardEl;
        const cardWidth = selectedSpread === "single" ? 180 : selectedSpread === "three" ? 140 : 120;
        const cardHeight = cardWidth * 1.7;
        card.style.transition = 'transform 1s ease, opacity 1s ease';
        card.style.transform = `translate(${(pos.x/100)*containerWidth - cardWidth/2}px, ${(pos.y/100)*containerHeight - cardHeight/2}px) rotate(0deg) scale(${cardWidth/120})`;
        card.style.zIndex = 10;
    });

    // Diğer kartları kaybet
    const allCards = Array.from(cardDeck.children);
    allCards.forEach(card => {
        if (!chosenCards.find(c => c.cardEl === card)) {
            card.style.transition = 'opacity 1s ease';
            card.style.opacity = 0;
            setTimeout(() => card.remove(), 1000);
        }
    });
}

// --- AI yorum ---
async function fetchAIComment(question, spread, cards, userName) {
    // Paneli aç ve sadece loading göster
    aiPanel.style.display = 'flex';
    loadingEl.style.display = 'block';
    aiResponseEl.style.display = 'none';
    speechBtns.style.display = 'none';
    resultArea.classList.remove('active');

    // Var ise eski sesli okuma durdur
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

    try {
        const resp = await fetch('/api/ai-comment', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                question: question,
                spread: spread,
                cards: cards.map(c => ({ name: c.name, meaning: c.meaning })),
                userName: userName
            })
        });

        const text = await resp.text();

        if (resp.status === 429) {
            aiResponseEl.textContent = 'Günlük API kullanım limitinize ulaşıldı. Lütfen yarın tekrar deneyin.';
        } else if (!resp.ok) {
            console.error("Gemini API hatası:", text);
            aiResponseEl.textContent = 'AI yanıtı alınamadı. Lütfen bir süre sonra tekrar deneyin.';
        } else {
            const data = JSON.parse(text);
            const aiText = data.aiText || 'AI yanıtı boş döndü.';
            aiResponseEl.textContent = aiText;
            speakText(aiText);
        }

        // Loading'i gizle, yanıt ve ses butonlarını göster
        loadingEl.style.display = 'none';
        aiResponseEl.style.display = 'block';
        speechBtns.style.display = 'flex';
        resultArea.classList.add('active');

    } catch (err) {
        console.error('API isteği hatası:', err);
        loadingEl.style.display = 'none';
        aiResponseEl.style.display = 'block';
        aiResponseEl.textContent = 'AI yanıtı alınamadı: ' + (err.message || 'Bilinmeyen bir hata oluştu.');
        speechBtns.style.display = 'flex';
        resultArea.classList.add('active');
    }
}




// --- Reset ---
function resetGame() {
    // Sesli okumayı durdur
    if (window.speechSynthesis.speaking) window.speechSynthesis.cancel();

    // Tüm ekranları ve AI panelini sıfırla
    showScreen(introScreen);
    aiPanel.style.display = 'none';
    aiResponseEl.textContent = '';
    loadingEl.style.display = 'none';
    speechBtns.style.display = 'none';

    // Kartları temizle ve değişkenleri sıfırla
    cardDeck.innerHTML = '';
    chosenCards = [];
    userQuestion = "";
    userName = "";
    selectedSpread = null;
    spreadCardLimit = 1;
    deckReady = false;
    spreadPlaced = false;

    // Giriş alanlarını temizle
    userNameInput.value = '';
    userQuestionInput.value = '';
}

function speakText(text) {
    if (!text) return;
    // Eğer ses zaten okunuyorsa durdur
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "tr-TR";
    utter.rate = 1;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
}

// Sayfa yüklenince tüm konuşmaları durdur
window.addEventListener('beforeunload', () => {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
});

// --- Sesli okuma ---
speakBtn.addEventListener('click', () => {
    speakText(aiResponseEl.textContent);
});

// --- Sesli okuma durdur ---
const stopBtn = document.getElementById('stop-speech');
stopBtn.addEventListener('click', () => {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
});

// --- Event Listeners ---
startButton.addEventListener('click', () => {
    showScreen(questionScreen);
});

submitQuestionBtn.addEventListener('click', () => {
    userName = userNameInput.value.trim();
    userQuestion = userQuestionInput.value.trim();
    if (!userQuestion) { alert("Lütfen bir soru yazın."); return; }
    showScreen(spreadScreen);
});


userQuestionInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") submitQuestionBtn.click();
});

retryButton.addEventListener('click', resetGame);

document.querySelectorAll("#spread-screen button").forEach(btn => {
    btn.addEventListener("click", () => {
        selectedSpread = btn.dataset.spread;
        if (selectedSpread === "single") spreadCardLimit = 1;
        if (selectedSpread === "three") spreadCardLimit = 3;
        if (selectedSpread === "celtic") spreadCardLimit = 10;
        if (selectedSpread === "love") spreadCardLimit = 5;

        showScreen(cardArea);
        createDeck();
    });
});

// --- Stil ---
const style = document.createElement('style');
style.textContent = `
.tarot-card.selected {
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5);
    transform: scale(1.05);
}
.card-label {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: rgba(255,215,0,0.9);
    color: #000;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 50%;
    font-size: 0.9em;
}
`;
document.head.appendChild(style);