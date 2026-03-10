// ฐานข้อมูลข้อสอบนิวเคลียร์ ชุดที่ 1 ระดับพื้นฐาน (20 ข้อ)
// q = คำถาม, a = ตัวเลือกคำตอบ, correct = ดัชนีคำตอบที่ถูกต้อง
const quizData = [
    { q: "ศูนย์กลางของอะตอมที่ประกอบด้วยโปรตอนและนิวตรอนเรียกว่าอะไร?", a: ["อิเล็กตรอน", "นิวเคลียส", "พลาสมา", "โมเลกุล"], correct: 1 },
    { q: "อนุภาคที่มีประจุไฟฟ้าเป็นบวกในนิวเคลียสคืออะไร?", a: ["นิวตรอน", "อิเล็กตรอน", "โปรตอน", "นิวไคลด์"], correct: 2 },
    { q: "ปฏิกิริยาที่นิวเคลียสขนาดใหญ่แตกตัวออกเป็นนิวเคลียสขนาดเล็กเรียกว่าอะไร?", a: ["ฟิวชัน", "การเผาไหม้", "ฟิชชัน", "การสลายตัว"], correct: 2 },
    { q: "รังสีชนิดใดที่มีอำนาจทะลุทะลวงต่ำที่สุดและกั้นได้ด้วยกระดาษ?", a: ["รังสีแกมมา", "รังสีแอลฟา", "รังสีบีต้า", "รังสีเอกซ์"], correct: 1 },
    { q: "แหล่งกำเนิดรังสีตามธรรมชาติที่มนุษย์ได้รับมากที่สุดคืออะไร?", a: ["รังสีคอสมิก", "ก๊าซเรดอน", "โรงไฟฟ้านิวเคลียร์", "เครื่องเอกซเรย์"], correct: 1 },
    { q: "รังสีที่ไม่ทำให้เซลล์แตกตัวและมีพลังงานต่ำเรียกว่าอะไร?", a: ["รังสีไอออนไนซ์", "รังสีแกมมา", "รังสีไม่ไอออนไนซ์", "รังสีแอลฟา"], correct: 2 },
    { q: "ปฏิกิริยาที่เกิดบนดวงอาทิตย์คือปฏิกิริยาชนิดใด?", a: ["ฟิวชัน", "ฟิชชัน", "การสลายตัวของยูเรเนียม", "การเผาไหม้ออกซิเจน"], correct: 0 },
    { q: "วัสดุใดที่นิยมใช้กั้นรังสีแกมมาได้ดีที่สุด?", a: ["กระดาษ", "ตะกั่ว", "พลาสติก", "ไม้"], correct: 1 },
    { q: "โรงไฟฟ้านิวเคลียร์ใช้ความร้อนไปทำหน้าที่หลักในข้อใด?", a: ["ละลายน้ำแข็ง", "ต้มน้ำให้เป็นไอน้ำ", "เผาถ่านหิน", "สร้างแสงสว่างโดยตรง"], correct: 1 },
    { q: "ในทางการแพทย์ รังสีนิวเคลียร์ใช้ประโยชน์เด่นชัดในด้านใด?", a: ["การปรุงอาหาร", "การตรวจวินิจฉัยและรักษาโรค", "การเปลี่ยนสีผิว", "การเพิ่มส่วนสูง"], correct: 1 },
    { q: "อนุภาคที่ไม่มีประจุไฟฟ้าและอยู่ในนิวเคลียสคืออะไร?", a: ["อิเล็กตรอน", "นิวตรอน", "โปรตอน", "พลาสมา"], correct: 1 },
    { q: "การทำหมันแมลงด้วยรังสีมีวัตถุประสงค์เพื่ออะไร?", a: ["ทำให้แมลงสวยงาม", "ลดประชากรแมลงศัตรูพืช", "ทำให้แมลงอายุยืน", "เปลี่ยนแมลงเป็นอาหาร"], correct: 1 },
    { q: "ธาตุชนิดใดนิยมใช้เป็นเชื้อเพลิงในโรงไฟฟ้านิวเคลียร์แบบฟิชชัน?", a: ["ไฮโดรเจน", "ยูเรเนียม-235", "ออกซิเจน", "คาร์บอน"], correct: 1 },
    { q: "ข้อใดเป็นตัวอย่างของรังสีไอออนไนซ์?", a: ["คลื่นวิทยุ", "รังสีแกมมา", "แสงสีแดง", "คลื่นไมโครเวฟ"], correct: 1 },
    { q: "ปฏิกิริยานิวเคลียร์ที่เกิดจากการรวมตัวของนิวเคลียสขนาดเล็กเรียกว่าอะไร?", a: ["ฟิวชัน", "ฟิชชัน", "การระเหิด", "ปฏิกิริยาลูกโซ่"], correct: 0 },
    { q: "รังสีชนิดใดที่สามารถกั้นได้ด้วยแผ่นอะลูมิเนียม?", a: ["รังสีแอลฟา", "รังสีบีต้า", "รังสีแกมมา", "รังสีนิวตรอน"], correct: 1 },
    { q: "สสารสถานะก๊าซร้อนที่มีประจุซึ่งจำเป็นต่อการเกิดฟิวชันเรียกว่าอะไร?", a: ["ไอระเหย", "พลาสมา", "ของเหลวหนืด", "ผลึกแข็ง"], correct: 1 },
    { q: "อุปกรณ์ใดทำหน้าที่หมุนเพื่อผลิตกระแสไฟฟ้าในโรงไฟฟ้า?", a: ["ถังน้ำเย็น", "กังหัน (Turbine)", "แผงโซลาร์เซลล์", "เสาไฟฟ้า"], correct: 1 },
    { q: "รังสีในธรรมชาติที่มาจากพื้นดินและแร่ธาตุเรียกว่าอะไร?", a: ["รังสีเทอร์เรสเทรียล", "รังสีคอสมิก", "รังสีเอกซ์", "รังสีสะท้อน"], correct: 0 },
    { q: "การวินิจฉัยโรคต่อมไทรอยด์มักใช้สารรังสีชนิดใด?", a: ["ยูเรเนียม-235", "ไอโอดีน-131", "คาร์บอน-14", "เรเดียม"], correct: 1 }
];

// ตัวแปรสถานะสำหรับติดตามความคืบหน้าของแบบทดสอบ
let currentQuiz = 0;  // ดัชนีข้อสอบปัจจุบัน (0-19)
let score = 0;        // คะแนนสะสมของผู้ทำแบบทดสอบ

// ฟังก์ชันสำหรับเปิด/ปิด accordion ในส่วนคำถามที่พบบ่อย
// button = ปุ่มที่ถูกคลิก
function toggleAccordion(button) {
    const content = button.nextElementSibling;  // หาเนื้อหาที่ซ่อนอยู่ถัดจากปุ่ม
    const icon = button.querySelector('i');      // หาไอคอนลูกศรในปุ่ม

    // ตรวจสอบว่ามีเนื้อหาและไอคอนหรือไม่
    if (!content || !icon) {
        return;
    }

    // เปลี่ยนสถานะการแสดงผลของเนื้อหา (เปิด/ปิด)
    content.classList.toggle('hidden');
    // หมุนไอคอนลูกศร 180 องศาเมื่อเปิด/ปิด
    icon.classList.toggle('rotate-180');
}

// ข้อความความรู้สำหรับ Stage 3
const atomFacts = [
    { text: 'แอลฟา = นิวเคลียสฮีเลียม (2p+2n)', color: '#e74c3c' },
    { text: 'เบตา = อิเล็กตรอนความเร็วสูง', color: '#f39c12' },
    { text: 'แกมมา = คลื่นแม่เหล็กไฟฟ้าพลังงานสูง', color: '#9b59b6' },
    { text: 'U-235 แตกตัวปล่อยนิวตรอน 2-3 ตัว', color: '#e74c3c' },
    { text: 'ฟิวชันต้องการอุณหภูมิ ~10 ล้าน C', color: '#f39c12' },
    { text: 'แกมมาทะลุร่างกายได้ ต้องใช้ตะกั่วกั้น', color: '#9b59b6' },
    { text: 'รัทเทอร์ฟอร์ดค้นพบนิวเคลียสปี 1911', color: '#3498db' },
    { text: 'แอลฟากั้นด้วยกระดาษแผ่นเดียว', color: '#e74c3c' },
    { text: 'I-131 ใช้ตรวจต่อมไทรอยด์', color: '#27ae60' },
    { text: 'ฟิวชันให้พลังงานมากกว่าฟิชชัน 4 เท่า/กก.', color: '#f39c12' }
];

// ฟังก์ชันตั้งค่าอะตอมแบบโต้ตอบในส่วนพื้นฐานนิวเคลียร์
function setupInteractiveAtom() {
    const atom = document.getElementById('interactive-atom');
    const nucleus = document.getElementById('atom-nucleus');
    const instruction = document.getElementById('atom-instruction');
    const stageText = document.getElementById('atom-stage-text');

    if (!atom || !nucleus) return;

    let currentStage = 0; // 0 = พร้อม, 1 = สั่น, 2 = ปล่อยอนุภาค, 3 = flash
    let isAnimating = false;

    // ฟังก์ชันหลักเมื่อคลิก
    const handleAtomClick = () => {
        if (isAnimating) return;
        isAnimating = true;
        currentStage++;

        if (currentStage === 1) {
            // Stage 1: นิวเคลียสสั่น + วงโคจรเร่ง
            stageStimulate();
        } else if (currentStage === 2) {
            // Stage 2: ปล่อยอนุภาคแบบสุ่ม
            stageEmitParticle();
        } else if (currentStage === 3) {
            // Stage 3: Flash + ข้อความความรู้
            stageFlashAndFact();
        }
    };

    // Stage 1: นิวเคลียสสั่น + วงโคจรเร่ง
    function stageStimulate() {
        atom.classList.add('stage-1');
        nucleus.classList.remove('shake');
        void nucleus.offsetWidth;
        nucleus.classList.add('shake');

        instruction.textContent = 'นิวเคลียสไม่เสถียร! คลิกอีกครั้ง...';
        instruction.style.color = '#e74c3c';
        stageText.textContent = '[ 1/3 ] กระตุ้นนิวเคลียส';
        stageText.style.color = '#e74c3c';

        setTimeout(() => { isAnimating = false; }, 900);
    }

    // Stage 2: ปล่อยอนุภาคแบบสุ่ม
    function stageEmitParticle() {
        const types = ['alpha', 'beta', 'gamma'];
        const chosen = types[Math.floor(Math.random() * types.length)];
        const labels = { alpha: 'Alpha', beta: 'Beta', gamma: 'Gamma' };
        const colors = { alpha: '#e74c3c', beta: '#f39c12', gamma: '#9b59b6' };

        // ปล่อยอนุภาคหลายตัว
        const count = chosen === 'gamma' ? 3 : 5;
        for (let i = 0; i < count; i++) {
            setTimeout(() => emitParticle(chosen), i * 120);
        }

        instruction.textContent = `ปล่อยรังสี ${labels[chosen]}! คลิกอีกครั้ง...`;
        instruction.style.color = colors[chosen];
        stageText.textContent = `[ 2/3 ] ปล่อยอนุภาค ${labels[chosen]}`;
        stageText.style.color = colors[chosen];

        setTimeout(() => { isAnimating = false; }, 1500);
    }

    // สร้างอนุภาคเดี่ยว
    function emitParticle(type) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${type}`;

        // สุ่มทิศทาง
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 80;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.marginLeft = '-5px';
        particle.style.marginTop = '-5px';

        atom.appendChild(particle);

        // ลบอนุภาคหลังจบแอนิเมชัน
        const duration = type === 'gamma' ? 1000 : (type === 'alpha' ? 1200 : 800);
        setTimeout(() => particle.remove(), duration);
    }

    // Stage 3: Flash + ข้อความความรู้
    function stageFlashAndFact() {
        // สร้าง flash
        const flash = document.createElement('div');
        flash.className = 'atom-flash';
        atom.appendChild(flash);
        setTimeout(() => flash.remove(), 700);

        // สุ่มข้อความความรู้
        const fact = atomFacts[Math.floor(Math.random() * atomFacts.length)];

        // สร้างข้อความความรู้
        const knowledge = document.createElement('div');
        knowledge.className = 'atom-knowledge';
        knowledge.textContent = fact.text;
        knowledge.style.backgroundColor = fact.color;
        knowledge.style.color = '#ffffff';
        atom.appendChild(knowledge);
        setTimeout(() => knowledge.remove(), 3200);

        instruction.textContent = 'คลิกอะตอมเพื่อกระตุ้นนิวเคลียส';
        instruction.style.color = '';
        stageText.textContent = '[ 3/3 ] การสลายตัว!';
        stageText.style.color = '#27ae60';

        // รีเซ็ตกลับสู่สถานะปกติ
        setTimeout(() => {
            atom.classList.remove('stage-1');
            nucleus.classList.remove('shake');
            stageText.textContent = '';
            currentStage = 0;
            isAnimating = false;
        }, 3000);
    }

    // event listeners
    atom.addEventListener('click', handleAtomClick);

    atom.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleAtomClick();
        }
    });

    // เอฟเฟกต์ 3D เมื่อเลื่อนเมาส์
    atom.addEventListener('mousemove', (event) => {
        const rect = atom.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        const rotateY = (offsetX / (rect.width / 2)) * 5;
        const rotateX = -(offsetY / (rect.height / 2)) * 5;
        atom.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    atom.addEventListener('mouseleave', () => {
        atom.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    });
}

// ฟังก์ชันโหลดข้อสอบและแสดงผลบนหน้าเว็บ
function loadQuiz() {
    const q = quizData[currentQuiz];        // ดึงข้อมูลข้อสอบปัจจุบัน
    const total = quizData.length;           // จำนวนข้อสอบทั้งหมด (20)
    const progress = Math.round((currentQuiz / total) * 100);  // คำนวณเปอร์เซ็นต์ความคืบหน้า

    // แสดงคำถามพร้อมหมายเลขข้อ (เช่น "ข้อ 3/20")
    document.getElementById('question').innerText = `ข้อ ${currentQuiz + 1}/${total}  ${q.q}`;

    // อัปเดต progress bar
    const progressBar = document.getElementById('quiz-progress');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;  // ตั้งค่าความกว้างของ progress bar
    }

    // สร้างปุ่มตัวเลือกคำตอบ
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';               // ล้างปุ่มเก่าออกก่อน
    const labels = ['ก.', 'ข.', 'ค.', 'ง.']; // ป้ายกำกับตัวเลือก
    q.a.forEach((opt, idx) => {              // วนลูปสร้างปุ่มทีละตัว
        const btn = document.createElement('button');
        btn.innerText = `${labels[idx]} ${opt}`;  // ตั้งข้อความในปุ่ม
        btn.className = "w-full py-3 px-6 text-left border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition font-medium";
        btn.onclick = () => checkAnswer(idx, btn);  // ผูกฟังก์ชันตรวจคำตอบ
        optionsDiv.appendChild(btn);          // เพิ่มปุ่มลงในคอนเทนเนอร์
    });
}

// ฟังก์ชันตรวจคำตอบและแสดงผลลัพธ์
// idx = ดัชนีตัวเลือกที่ผู้ใช้เลือก, selectedBtn = ปุ่มที่ถูกคลิก
function checkAnswer(idx, selectedBtn) {
    const correct = quizData[currentQuiz].correct;  // ดัชนีคำตอบที่ถูกต้อง
    const isCorrect = idx === correct;              // ตรวจสอบว่าตอบถูกหรือไม่
    if (isCorrect) score++;                          // ถ้าถูก เพิ่มคะแนน

    // หาปุ่มทั้งหมดในข้อสอบนี้
    const optionsDiv = document.getElementById('options');
    const allBtns = optionsDiv.querySelectorAll('button');

    // อัปเดตสไตล์ปุ่มทั้งหมดเพื่อแสดงผลลัพธ์
    allBtns.forEach((btn, i) => {
        btn.disabled = true;           // ปิดการใช้งานปุ่มทั้งหมด
        btn.onclick = null;            // ลบ event listener
        if (i === correct) {           // ปุ่มคำตอบที่ถูกต้อง
            btn.className = "w-full py-3 px-6 text-left border-2 rounded-xl font-medium border-green-500 bg-green-50 text-green-800";
        } else if (btn === selectedBtn && !isCorrect) {  // ปุ่มที่ผู้ใช้เลือกแต่ตอบผิด
            btn.className = "w-full py-3 px-6 text-left border-2 rounded-xl font-medium border-red-400 bg-red-50 text-red-700";
        } else {                       // ปุ่มอื่นๆ
            btn.className = "w-full py-3 px-6 text-left border-2 rounded-xl font-medium border-gray-200 text-gray-400";
        }
    });

    // รอ 0.9 วินาทีแล้วข้ามไปข้อถัดไป
    setTimeout(() => {
        currentQuiz++;  // เพิ่มดัชนีข้อสอบ
        if (currentQuiz < quizData.length) {  // ยังมีข้อสอบอยู่
            loadQuiz();  // โหลดข้อถัดไป
        } else {       // ทำแบบทดสอบเสร็จสิ้น
            // คำนวณเปอร์เซ็นต์คะแนน
            const percent = Math.round((score / quizData.length) * 100);
            // กำหนดข้อความตามช่วงคะแนน
            let msg = percent >= 80 ? "ยอดเยี่ยม! ความเข้าใจระดับดีมาก" :
                      percent >= 60 ? "ดี! ลองทบทวนเนื้อหาเพิ่มเติมได้" :
                      "ลองศึกษาเนื้อหาแล้วทำใหม่อีกครั้ง";
            // แสดงหน้าจอสรุปผลลัพธ์
            document.getElementById('quiz-container').innerHTML = `
                <div class="text-center">
                    <div class="text-6xl font-bold mb-2 text-blue-600">${score}<span class="text-3xl text-gray-400">/${quizData.length}</span></div>
                    <div class="text-lg text-gray-500 mb-2">${percent}%</div>
                    <p class="text-lg font-medium mb-6">${msg}</p>
                    <button onclick="location.reload()" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition">ทำใหม่อีกครั้ง</button>
                </div>
            `;
        }
    }, 300);  // หน่วงเวลา 300 มิลลิวินาที
}

// ฟังก์ชันสำหรับแสดง/ซ่อนรูปภาพ
function toggleImage(imageId) {
    const imageElement = document.getElementById(imageId);
    if (imageElement) {
        imageElement.classList.toggle('hidden');
    }
}

// ฟังก์ชันสำหรับเกมจับคู่ธาตุ
let gameState = {
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    score: 1000,
    attempts: 0,
    timer: 0,
    timerInterval: null,
    isPlaying: false
};

// ข้อมูลธาตุที่ใช้ในเกม
const elements = [
    { symbol: 'U', name: 'ยูเรเนียม', info: 'เชื้อเพลิงนิวเคลียร์' },
    { symbol: 'H', name: 'ไฮโดรเจน', info: 'เชื้อเพลิงฟิวชัน' },
    { symbol: 'He', name: 'ฮีเลียม', info: 'ผลิตภัณฑ์ฟิวชัน' },
    { symbol: 'Pu', name: 'พลูโทเนียม', info: 'เชื้อเพลิงนิวเคลียร์' },
    { symbol: 'Th', name: 'ทอเรียม', info: 'เชื้อเพลิงทางเลือก' },
    { symbol: 'I', name: 'ไอโอดีน', info: 'การวินิจฉัยทางการแพทย์' },
    { symbol: 'Cs', name: 'ซีเซียม', info: 'ผลิตภัณฑ์ฟิชชัน' },
    { symbol: 'Sr', name: 'สตรอนเชียม', info: 'การบำบัดทางการแพทย์' }
];

// เริ่มเกมใหม่
function startGame() {
    // รีเซ็ตสถานะเกม
    gameState = {
        cards: [],
        flippedCards: [],
        matchedPairs: 0,
        score: 1000,
        attempts: 0,
        timer: 0,
        timerInterval: null,
        isPlaying: true
    };
    
    // สร้างไพ่
    createCards();
    shuffleCards();
    renderGameBoard();
    updateGameStats();
    hideGameMessage();
    
    // แสดงข้อความให้กดเริ่มเกมเพื่อเริ่มจับเวลา
    showGameMessage('กดปุ่ม "เริ่มเกมใหม่" เพื่อเริ่มเล่น!', 'hint');
}

// สร้างไพ่ทั้งหมด
function createCards() {
    gameState.cards = [];
    elements.forEach((element, index) => {
        // สร้างไพ่สัญลักษณ์
        gameState.cards.push({
            id: index * 2,
            type: 'symbol',
            content: element.symbol,
            pairId: index,
            element: element
        });
        // สร้างไพ่ชื่อ
        gameState.cards.push({
            id: index * 2 + 1,
            type: 'name',
            content: element.name,
            pairId: index,
            element: element
        });
    });
}

// สับไพ่
function shuffleCards() {
    for (let i = gameState.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [gameState.cards[i], gameState.cards[j]] = [gameState.cards[j], gameState.cards[i]];
    }
}

// แสดงกระดานเกม
function renderGameBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    
    gameState.cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 text-center font-bold text-lg';
        cardElement.dataset.cardId = card.id;
        cardElement.dataset.pairId = card.pairId;
        cardElement.dataset.flipped = 'false';
        cardElement.textContent = '?';
        cardElement.onclick = () => flipCard(card.id);
        board.appendChild(cardElement);
    });
}

// พลิกไพ่
function flipCard(cardId) {
    if (!gameState.isPlaying) return;
    
    // เริ่มจับเวลาเมื่อคลิกไพ่ครั้งแรก
    if (gameState.timer === 0 && gameState.timerInterval === null) {
        startTimer();
    }
    
    const card = gameState.cards.find(c => c.id === cardId);
    const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
    
    // ตรวจสอบว่าไพ่ถูกพลิกแล้วหรือไม่
    if (cardElement.dataset.flipped === 'true') return;
    
    // ตรวจสอบว่ามีไพ่ 2 ใบถูกพลิกแล้วหรือไม่
    if (gameState.flippedCards.length >= 2) return;
    
    // พลิกไพ่
    cardElement.dataset.flipped = 'true';
    cardElement.textContent = card.content;
    cardElement.classList.add('flipped');
    
    // เพิ่มไพ่ที่พลิกลงในรายการ
    gameState.flippedCards.push(card);
    
    // ตรวจสอบว่ามี 2 ไพ่ถูกพลิกหรือไม่
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        checkMatch();
    }
}

// ตรวจสอบการจับคู่
function checkMatch() {
    const [card1, card2] = gameState.flippedCards;
    
    if (card1.pairId === card2.pairId) {
        // จับคู่สำเร็จ
        setTimeout(() => {
            const cardElement1 = document.querySelector(`[data-card-id="${card1.id}"]`);
            const cardElement2 = document.querySelector(`[data-card-id="${card2.id}"]`);
            
            // เปลี่ยนสีไพ่เป็นสีเขียวและเอาเอฟเฟกต์เดิมออก
            cardElement1.classList.remove('from-blue-500', 'to-purple-600', 'hover:scale-105');
            cardElement2.classList.remove('from-blue-500', 'to-purple-600', 'hover:scale-105');
            cardElement1.classList.add('bg-gradient-to-br', 'from-green-500', 'to-green-600', 'border-2', 'border-green-300');
            cardElement2.classList.add('bg-gradient-to-br', 'from-green-500', 'to-green-600', 'border-2', 'border-green-300');
            cardElement1.onclick = null;
            cardElement2.onclick = null;
            
            gameState.matchedPairs++;
            showGameMessage(`ถูกต้อง! ${card1.element.info}`, 'success');
            
            // ตรวจสอบว่าจบเกมหรือไม่
            if (gameState.matchedPairs === elements.length) {
                endGame();
            }
            
            gameState.flippedCards = [];
            updateGameStats();
        }, 500);
    } else {
        // จับคู่ผิด
        setTimeout(() => {
            const cardElement1 = document.querySelector(`[data-card-id="${card1.id}"]`);
            const cardElement2 = document.querySelector(`[data-card-id="${card2.id}"]`);
            
            cardElement1.textContent = '?';
            cardElement2.textContent = '?';
            cardElement1.dataset.flipped = 'false';
            cardElement2.dataset.flipped = 'false';
            cardElement1.classList.remove('flipped');
            cardElement2.classList.remove('flipped');
            
            gameState.score = Math.max(0, gameState.score - 10);
            showGameMessage('ผิด! ลองใหม่', 'error');
            
            gameState.flippedCards = [];
            updateGameStats();
        }, 1000);
    }
}

// แสดงคำใบ้
function showHint() {
    if (!gameState.isPlaying || gameState.flippedCards.length > 0) return;
    
    // หาไพ่ที่ยังไม่ถูกจับคู่
    const unmatchedCards = gameState.cards.filter(card => {
        const cardElement = document.querySelector(`[data-card-id="${card.id}"]`);
        return cardElement.dataset.flipped === 'false';
    });
    
    if (unmatchedCards.length >= 2) {
        // สุ่มเลือกไพ่ 2 ใบที่เป็นคู่กัน
        const randomCard = unmatchedCards[Math.floor(Math.random() * unmatchedCards.length)];
        const pairCard = unmatchedCards.find(card => card.pairId === randomCard.pairId && card.id !== randomCard.id);
        
        if (pairCard) {
            // แสดงไพ่คู่ที่ถูกต้องเป็นเวลาสั้นๆ
            const cardElement1 = document.querySelector(`[data-card-id="${randomCard.id}"]`);
            const cardElement2 = document.querySelector(`[data-card-id="${pairCard.id}"]`);
            
            cardElement1.textContent = randomCard.content;
            cardElement2.textContent = pairCard.content;
            cardElement1.classList.add('bg-yellow-500');
            cardElement2.classList.add('bg-yellow-500');
            
            setTimeout(() => {
                cardElement1.textContent = '?';
                cardElement2.textContent = '?';
                cardElement1.classList.remove('bg-yellow-500');
                cardElement2.classList.remove('bg-yellow-500');
            }, 2000);
            
            gameState.score = Math.max(0, gameState.score - 20);
            updateGameStats();
            showGameMessage('คำใบ้: ดูไพ่สีเหลือง!', 'hint');
        }
    }
}

// เริ่มจับเวลา
function startTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(() => {
        gameState.timer++;
        updateTimer();
    }, 1000);
}

// อัปเดตเวลา
function updateTimer() {
    const minutes = Math.floor(gameState.timer / 60);
    const seconds = gameState.timer % 60;
    document.getElementById('game-timer').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// อัปเดตสถิติเกม
function updateGameStats() {
    document.getElementById('game-score').textContent = gameState.score;
    document.getElementById('game-matches').textContent = `${gameState.matchedPairs}/${elements.length}`;
}

// แสดงข้อความเกม
function showGameMessage(message, type) {
    const messageElement = document.getElementById('game-message');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
    
    // กำหนดสีตามประเภทข้อความ
    messageElement.classList.remove('bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800', 'bg-yellow-100', 'text-yellow-800');
    
    switch(type) {
        case 'success':
            messageElement.classList.add('bg-green-100', 'text-green-800');
            break;
        case 'error':
            messageElement.classList.add('bg-red-100', 'text-red-800');
            break;
        case 'hint':
            messageElement.classList.add('bg-yellow-100', 'text-yellow-800');
            break;
    }
    
    // ซ่อนข้อความหลัง 3 วินาที
    setTimeout(() => {
        hideGameMessage();
    }, 3000);
}

// ซ่อนข้อความเกม
function hideGameMessage() {
    const messageElement = document.getElementById('game-message');
    messageElement.classList.add('hidden');
}

// จบเกม
function endGame() {
    gameState.isPlaying = false;
    clearInterval(gameState.timerInterval);
    
    // คำนวณคะแนนสุดท้าย
    const finalScore = Math.max(0, gameState.score - (gameState.timer * 2));
    
    showGameMessage(`🎉 จบเกม! คะแนนสุดท้าย: ${finalScore} เวลา: ${Math.floor(gameState.timer / 60)}:${(gameState.timer % 60).toString().padStart(2, '0')}`, 'success');
    
    // อัปเดตคะแนนสุดท้าย
    document.getElementById('game-score').textContent = finalScore;
}

// ฟังก์ชันตั้งค่าอะตอม Energy Meter
function setupEnergyAtom() {
    const atom = document.getElementById('energy-atom');
    const nucleus = document.getElementById('energy-nucleus');
    const energyBar = document.getElementById('energy-bar');
    const energyValue = document.getElementById('energy-value');
    const energyStatus = document.getElementById('energy-status');
    const instruction = document.getElementById('energy-instruction');

    if (!atom || !nucleus) return;

    let energy = 0;
    const maxEnergy = 100;
    const threshold = 70;       // จุดวิกฤต
    const energyPerClick = 10;  // พลังงานที่เพิ่มต่อคลิก
    let isCooldown = false;

    // ข้อความเมื่อสลายตัว
    const decayMessages = [
        'นิวเคลียสสลายตัวแล้ว! ปล่อยรังสีแอลฟา',
        'เกิดการสลายตัว! ปล่อยรังสีเบตาออกมา',
        'นิวเคลียสไม่เสถียร! ปล่อยรังสีแกมมา',
        'Radioactive Decay! พลังงานถูกปลดปล่อย',
        'นิวไคลด์สลายตัวเป็นธาตุที่เสถียรขึ้น'
    ];

    // คลิกเพิ่มพลังงาน
    const handleClick = () => {
        if (isCooldown) return;

        energy = Math.min(maxEnergy, energy + energyPerClick);
        updateUI();

        // ถ้าพลังงานถึงจุดสูงสุด -> สลายตัว
        if (energy >= maxEnergy) {
            triggerDecay();
        }
    };

    // ตำแหน่งสำหรับอิเล็กตรอนเพิ่มเติม
    const electronPositions = ['electron-pos-bottom', 'electron-pos-left', 'electron-pos-right'];

    // อัปเดตจำนวนอิเล็กตรอนตามระดับพลังงาน
    function updateElectrons() {
        const orbits = atom.querySelectorAll('.orbit');
        let targetCount, colorClass;

        if (energy <= 30) {
            targetCount = 1; // 1 ตัวต่อวง (3 ตัวรวม)
            colorClass = '';
        } else if (energy <= 60) {
            targetCount = 2; // 2 ตัวต่อวง (6 ตัวรวม)
            colorClass = 'electron-energy-mid';
        } else if (energy < maxEnergy) {
            targetCount = 3; // 3 ตัวต่อวง (9 ตัวรวม)
            colorClass = 'electron-energy-high';
        } else {
            targetCount = 4; // 4 ตัวต่อวง (12 ตัวรวม)
            colorClass = 'electron-energy-critical';
        }

        orbits.forEach(orbit => {
            const currentElectrons = orbit.querySelectorAll('.electron');
            const currentCount = currentElectrons.length;

            if (currentCount < targetCount) {
                // เพิ่มอิเล็กตรอน
                for (let i = currentCount; i < targetCount; i++) {
                    const electron = document.createElement('div');
                    electron.className = 'electron';
                    if (i > 0) {
                        electron.classList.add(electronPositions[i - 1]);
                    }
                    if (colorClass) {
                        electron.classList.add(colorClass);
                    }
                    electron.dataset.added = 'true';
                    orbit.appendChild(electron);
                }
            } else if (currentCount > targetCount) {
                // ลบอิเล็กตรอนที่เพิ่มมา
                const addedElectrons = orbit.querySelectorAll('.electron[data-added="true"]');
                for (let i = addedElectrons.length - 1; i >= 0 && currentCount - (addedElectrons.length - 1 - i) > targetCount; i--) {
                    addedElectrons[i].remove();
                }
            }

            // อัปเดตสีอิเล็กตรอนที่เพิ่มมา
            if (colorClass) {
                const addedElectrons = orbit.querySelectorAll('.electron[data-added="true"]');
                addedElectrons.forEach(el => {
                    el.classList.remove('electron-energy-mid', 'electron-energy-high', 'electron-energy-critical');
                    el.classList.add(colorClass);
                });
            }
        });
    }

    // อัปเดต UI ตามระดับพลังงาน
    function updateUI() {
        // อัปเดตแถบพลังงาน
        energyBar.style.width = `${energy}%`;
        energyValue.textContent = `${energy} / ${maxEnergy}`;

        // ลบ class เดิมทั้งหมด
        nucleus.classList.remove('energy-low', 'energy-mid', 'energy-high', 'energy-critical');
        atom.classList.remove('energy-stage-mid', 'energy-stage-high', 'energy-stage-critical');

        if (energy <= 30) {
            // ระดับต่ำ: เขียว
            nucleus.classList.add('energy-low');
            energyBar.className = 'h-full rounded-full transition-all duration-300 bg-green-500';
            energyStatus.textContent = 'นิวเคลียสเสถียร';
            energyStatus.style.color = '#27ae60';
            instruction.textContent = 'คลิกเพื่อเพิ่มพลังงาน (+10)';
        } else if (energy <= 60) {
            // ระดับกลาง: ส้ม
            nucleus.classList.add('energy-mid');
            atom.classList.add('energy-stage-mid');
            energyBar.className = 'h-full rounded-full transition-all duration-300 bg-yellow-500';
            energyStatus.textContent = 'พลังงานสะสมเพิ่มขึ้น...';
            energyStatus.style.color = '#f39c12';
            instruction.textContent = 'เพิ่มพลังงานต่อไป! (+10)';
        } else if (energy < maxEnergy) {
            // ระดับสูง: แดง เตือนใกล้สลายตัว
            nucleus.classList.add('energy-high');
            atom.classList.add('energy-stage-high');
            energyBar.className = 'h-full rounded-full transition-all duration-300 bg-orange-500';
            energyStatus.textContent = 'ใกล้จุดวิกฤต! ระวัง!';
            energyStatus.style.color = '#e74c3c';
            instruction.textContent = 'อันตราย! ใกล้สลายตัว!';
        } else {
            // วิกฤต: แดงเข้ม
            nucleus.classList.add('energy-critical');
            atom.classList.add('energy-stage-critical');
            energyBar.className = 'h-full rounded-full transition-all duration-300 bg-red-600';
            energyStatus.textContent = 'สลายตัว!';
            energyStatus.style.color = '#c0392b';
        }

        // อัปเดตจำนวนอิเล็กตรอน
        updateElectrons();
    }

    // สลายตัว
    function triggerDecay() {
        isCooldown = true;

        // สร้าง flash
        const flash = document.createElement('div');
        flash.className = 'atom-flash';
        atom.appendChild(flash);
        setTimeout(() => flash.remove(), 700);

        // สร้างวงแหวนระเบิด 3 วง
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const ring = document.createElement('div');
                ring.className = 'decay-ring';
                atom.appendChild(ring);
                setTimeout(() => ring.remove(), 1200);
            }, i * 300);
        }

        // ปล่อยอนุภาคหลายตัวกระจายออก
        const types = ['alpha', 'beta', 'gamma'];
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const type = types[Math.floor(Math.random() * types.length)];
                emitEnergyParticle(type);
            }, i * 100);
        }

        // ข้อความสลายตัว
        const msg = decayMessages[Math.floor(Math.random() * decayMessages.length)];
        energyStatus.textContent = msg;
        energyStatus.style.color = '#c0392b';
        instruction.textContent = 'กำลัง cooldown...';

        // Cooldown overlay
        const overlay = document.createElement('div');
        overlay.className = 'cooldown-overlay';
        const cdText = document.createElement('span');
        cdText.className = 'cooldown-text';
        cdText.textContent = 'Cooldown...';
        overlay.appendChild(cdText);
        atom.appendChild(overlay);

        // นับถอยหลัง 3 วินาที
        let countdown = 3;
        cdText.textContent = `${countdown}s`;
        const cdInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                cdText.textContent = `${countdown}s`;
            } else {
                clearInterval(cdInterval);
            }
        }, 1000);

        // รีเซ็ตหลัง cooldown 3 วินาที
        setTimeout(() => {
            overlay.remove();
            energy = 0;
            isCooldown = false;
            nucleus.classList.remove('energy-low', 'energy-mid', 'energy-high', 'energy-critical');
            atom.classList.remove('energy-stage-mid', 'energy-stage-high', 'energy-stage-critical');
            // ลบอิเล็กตรอนที่เพิ่มมาทั้งหมด
            atom.querySelectorAll('.electron[data-added="true"]').forEach(el => el.remove());
            updateUI();
            energyStatus.textContent = 'คลิกนิวเคลียสเพื่อเพิ่มพลังงาน';
            energyStatus.style.color = '';
            instruction.textContent = 'คลิกเพื่อเพิ่มพลังงาน (+10)';
        }, 3000);
    }

    // สร้างอนุภาคสำหรับ Energy Atom
    function emitEnergyParticle(type) {
        const particle = document.createElement('div');
        particle.className = `particle particle-${type}`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 80;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.marginLeft = '-5px';
        particle.style.marginTop = '-5px';

        atom.appendChild(particle);

        const duration = type === 'gamma' ? 1000 : (type === 'alpha' ? 1200 : 800);
        setTimeout(() => particle.remove(), duration);
    }

    // Event listeners
    atom.addEventListener('click', handleClick);

    atom.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    });

    // เอฟเฟกต์ 3D เมื่อเลื่อนเมาส์
    atom.addEventListener('mousemove', (event) => {
        const rect = atom.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        const rotateY = (offsetX / (rect.width / 2)) * 5;
        const rotateX = -(offsetY / (rect.height / 2)) * 5;
        atom.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    atom.addEventListener('mouseleave', () => {
        atom.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    });

    // ตั้งค่าเริ่มต้น
    updateUI();
}

// กำหนด event listener สำหรับเริ่มทำงานเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();           // เริ่มแบบทดสอบ
    setupInteractiveAtom(); // ตั้งค่าอะตอมแบบโต้ตอบ
    setupEnergyAtom();    // ตั้งค่าอะตอม Energy Meter
    startGame();          // เริ่มเกมจับคู่ธาตุ
});
