// ฐานข้อมูลข้อสอบนิวเคลียร์ ชุดที่ 1 ระดับพื้นฐาน (20 ข้อ)
// q = คำถาม, a = ตัวเลือกคำตอบ, correct = ดัชนีคำตอบที่ถูกต้อง
const quizData = [
    { q: "ศูนย์กลางของอะตอมที่ประกอบด้วยโปรตอนและนิวตรอนเรียกว่าอะไร?", a: ["อิเล็กตรอน", "นิวเคลียส", "พลาสมา", "โมเลกุล"], correct: 1, explanation: "นิวเคลียสคือศูนย์กลางของอะตอมที่มีมวลส่วนใหญ่ ประกอบด้วยโปรตอน (ประจุบวก) และนิวตรอน (ไม่มีประจุ)" },
    { q: "อนุภาคที่มีประจุไฟฟ้าเป็นบวกในนิวเคลียสคืออะไร?", a: ["นิวตรอน", "อิเล็กตรอน", "โปรตอน", "นิวไคลด์"], correct: 2, explanation: "โปรตอนเป็นอนุภาคมูลฐานที่มีประจุไฟฟ้าเป็นบวก (+1) อยู่ในนิวเคลียส จำนวนโปรตอนกำหนดชนิดของธาตุ" },
    { q: "ปฏิกิริยาที่นิวเคลียสขนาดใหญ่แตกตัวออกเป็นนิวเคลียสขนาดเล็กเรียกว่าอะไร?", a: ["ฟิวชัน", "การเผาไหม้", "ฟิชชัน", "การสลายตัว"], correct: 2, explanation: "ฟิชชัน (Nuclear Fission) คือการแตกตัวของนิวเคลียสหนัก เช่น U-235 เป็นนิวเคลียสเล็กกว่า ปล่อยพลังงานมหาศาลและนิวตรอน" },
    { q: "รังสีชนิดใดที่มีอำนาจทะลุทะลวงต่ำที่สุดและกั้นได้ด้วยกระดาษ?", a: ["รังสีแกมมา", "รังสีแอลฟา", "รังสีบีต้า", "รังสีเอกซ์"], correct: 1, explanation: "รังสีแอลฟา (α) เป็นนิวเคลียสฮีเลียม มีมวลมาก ทะลุทะลวงต่ำ กั้นได้ด้วยกระดาษหรือผิวหนังชั้นนอก แต่อันตรายถ้าเข้าสู่ร่างกาย" },
    { q: "แหล่งกำเนิดรังสีตามธรรมชาติที่มนุษย์ได้รับมากที่สุดคืออะไร?", a: ["รังสีคอสมิก", "ก๊าซเรดอน", "โรงไฟฟ้านิวเคลียร์", "เครื่องเอกซเรย์"], correct: 1, explanation: "ก๊าซเรดอน (Radon) เป็นก๊าซกัมมันตรังสีธรรมชาติที่ออกมาจากดินและหิน สะสมในอาคาร เป็นแหล่งรังสีธรรมชาติที่มนุษย์ได้รับมากที่สุด" },
    { q: "รังสีที่ไม่ทำให้เซลล์แตกตัวและมีพลังงานต่ำเรียกว่าอะไร?", a: ["รังสีไอออนไนซ์", "รังสีแกมมา", "รังสีไม่ไอออนไนซ์", "รังสีแอลฟา"], correct: 2, explanation: "รังสีไม่ไอออนไนซ์ (Non-ionizing) มีพลังงานต่ำ ไม่สามารถทำให้อะตอมสูญเสียอิเล็กตรอน เช่น คลื่นวิทยุ ไมโครเวฟ แสงสว่าง" },
    { q: "ปฏิกิริยาที่เกิดบนดวงอาทิตย์คือปฏิกิริยาชนิดใด?", a: ["ฟิวชัน", "ฟิชชัน", "การสลายตัวของยูเรเนียม", "การเผาไหม้ออกซิเจน"], correct: 0, explanation: "ดวงอาทิตย์ใช้ปฏิกิริยาฟิวชัน (Nuclear Fusion) รวมนิวเคลียสไฮโดรเจนเป็นฮีเลียม ที่อุณหภูมิ ~15 ล้านองศาเซลเซียส ปล่อยพลังงานมหาศาล" },
    { q: "วัสดุใดที่นิยมใช้กั้นรังสีแกมมาได้ดีที่สุด?", a: ["กระดาษ", "ตะกั่ว", "พลาสติก", "ไม้"], correct: 1, explanation: "ตะกั่ว (Lead) มีความหนาแน่นสูง เป็นวัสดุที่ดีที่สุดในการกั้นรังสีแกมมา (γ) ซึ่งมีอำนาจทะลุทะลวงสูงมาก" },
    { q: "โรงไฟฟ้านิวเคลียร์ใช้ความร้อนไปทำหน้าที่หลักในข้อใด?", a: ["ละลายน้ำแข็ง", "ต้มน้ำให้เป็นไอน้ำ", "เผาถ่านหิน", "สร้างแสงสว่างโดยตรง"], correct: 1, explanation: "โรงไฟฟ้านิวเคลียร์ใช้ความร้อนจากปฏิกิริยาฟิชชันต้มน้ำให้เป็นไอน้ำ ไอน้ำหมุนกังหัน (Turbine) ซึ่งต่อกับเครื่องกำเนิดไฟฟ้า" },
    { q: "ในทางการแพทย์ รังสีนิวเคลียร์ใช้ประโยชน์เด่นชัดในด้านใด?", a: ["การปรุงอาหาร", "การตรวจวินิจฉัยและรักษาโรค", "การเปลี่ยนสีผิว", "การเพิ่มส่วนสูง"], correct: 1, explanation: "รังสีนิวเคลียร์ใช้ในการแพทย์หลากหลาย เช่น X-ray, CT scan, PET scan สำหรับวินิจฉัย และรังสีบำบัดสำหรับรักษามะเร็ง" },
    { q: "อนุภาคที่ไม่มีประจุไฟฟ้าและอยู่ในนิวเคลียสคืออะไร?", a: ["อิเล็กตรอน", "นิวตรอน", "โปรตอน", "พลาสมา"], correct: 1, explanation: "นิวตรอนเป็นอนุภาคที่ไม่มีประจุไฟฟ้า (เป็นกลาง) มีมวลใกล้เคียงโปรตอน อยู่ในนิวเคลียสช่วยรักษาเสถียรภาพของนิวเคลียส" },
    { q: "การทำหมันแมลงด้วยรังสีมีวัตถุประสงค์เพื่ออะไร?", a: ["ทำให้แมลงสวยงาม", "ลดประชากรแมลงศัตรูพืช", "ทำให้แมลงอายุยืน", "เปลี่ยนแมลงเป็นอาหาร"], correct: 1, explanation: "เทคนิค SIT (Sterile Insect Technique) ใช้รังสีทำหมันแมลงตัวผู้แล้วปล่อยกลับไป ผสมพันธุ์แต่ไม่มีลูก ช่วยควบคุมประชากรแมลงศัตรูพืชอย่างยั่งยืน" },
    { q: "ธาตุชนิดใดนิยมใช้เป็นเชื้อเพลิงในโรงไฟฟ้านิวเคลียร์แบบฟิชชัน?", a: ["ไฮโดรเจน", "ยูเรเนียม-235", "ออกซิเจน", "คาร์บอน"], correct: 1, explanation: "ยูเรเนียม-235 (U-235) เป็นไอโซโทปที่สามารถแตกตัวได้ง่าย (Fissile) เมื่อดูดซับนิวตรอน จึงเหมาะเป็นเชื้อเพลิงนิวเคลียร์" },
    { q: "ข้อใดเป็นตัวอย่างของรังสีไอออนไนซ์?", a: ["คลื่นวิทยุ", "รังสีแกมมา", "แสงสีแดง", "คลื่นไมโครเวฟ"], correct: 1, explanation: "รังสีไอออนไนซ์มีพลังงานสูงพอที่จะทำให้อะตอมสูญเสียอิเล็กตรอน เช่น รังสีแกมมา, เอกซ์เรย์, รังสีแอลฟา, รังสีบีตา" },
    { q: "ปฏิกิริยานิวเคลียร์ที่เกิดจากการรวมตัวของนิวเคลียสขนาดเล็กเรียกว่าอะไร?", a: ["ฟิวชัน", "ฟิชชัน", "การระเหิด", "ปฏิกิริยาลูกโซ่"], correct: 0, explanation: "ฟิวชัน (Nuclear Fusion) คือการรวมตัวของนิวเคลียสเบา เช่น ไฮโดรเจน เป็นนิวเคลียสหนักกว่า ต้องการอุณหภูมิและความดันสูงมาก" },
    { q: "รังสีชนิดใดที่สามารถกั้นได้ด้วยแผ่นอะลูมิเนียม?", a: ["รังสีแอลฟา", "รังสีบีต้า", "รังสีแกมมา", "รังสีนิวตรอน"], correct: 1, explanation: "รังสีบีตา (β) เป็นอิเล็กตรอนหรือโพซิตรอนความเร็วสูง มีอำนาจทะลุทะลวงปานกลาง กั้นได้ด้วยแผ่นอะลูมิเนียมหรือพลาสติกหนา" },
    { q: "สสารสถานะก๊าซร้อนที่มีประจุซึ่งจำเป็นต่อการเกิดฟิวชันเรียกว่าอะไร?", a: ["ไอระเหย", "พลาสมา", "ของเหลวหนืด", "ผลึกแข็ง"], correct: 1, explanation: "พลาสมา (Plasma) คือสถานะที่ 4 ของสสาร เป็นก๊าซร้อนจัดที่อะตอมแตกตัวเป็นไอออน จำเป็นสำหรับปฏิกิริยาฟิวชัน (อุณหภูมิหลายล้านองศา)" },
    { q: "อุปกรณ์ใดทำหน้าที่หมุนเพื่อผลิตกระแสไฟฟ้าในโรงไฟฟ้า?", a: ["ถังน้ำเย็น", "กังหัน (Turbine)", "แผงโซลาร์เซลล์", "เสาไฟฟ้า"], correct: 1, explanation: "กังหัน (Turbine) ถูกหมุนด้วยไอน้ำหรือน้ำ ต่อกับเครื่องกำเนิดไฟฟ้า (Generator) เปลี่ยนพลังงานกลเป็นพลังงานไฟฟ้า" },
    { q: "รังสีในธรรมชาติที่มาจากพื้นดินและแร่ธาตุเรียกว่าอะไร?", a: ["รังสีเทอร์เรสเทรียล", "รังสีคอสมิก", "รังสีเอกซ์", "รังสีสะท้อน"], correct: 0, explanation: "รังสีเทอร์เรสเทรียล (Terrestrial Radiation) เป็นรังสีธรรมชาติจากธาตุกัมมันตรังสีในดิน หิน และวัสดุก่อสร้าง เช่น ยูเรเนียม ทอเรียม โพแทสเซียม-40" },
    { q: "การวินิจฉัยโรคต่อมไทรอยด์มักใช้สารรังสีชนิดใด?", a: ["ยูเรเนียม-235", "ไอโอดีน-131", "คาร์บอน-14", "เรเดียม"], correct: 1, explanation: "ไอโอดีน-131 (I-131) เป็นไอโซโทปกัมมันตรังสีที่ต่อมไทรอยด์ดูดซับ ใช้ตรวจวินิจฉัยและรักษาโรคต่อมไทรอยด์ เช่น มะเร็งต่อมไทรอยด์" }
];

// ตัวแปรสถานะสำหรับติดตามความคืบหน้าของแบบทดสอบ
let currentQuiz = 0;  // ดัชนีข้อสอบปัจจุบัน (0-19)
let score = 0;        // คะแนนสะสมของผู้ทำแบบทดสอบ
let quizShuffledOptions = [];  // ตัวเลือกที่สุ่มแล้ว
let quizCorrectIndex = 0;      // ตำแหน่งคำตอบที่ถูกหลังสุ่ม

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

    // สุ่มลำดับตัวเลือกและเก็บ index ของคำตอบที่ถูกต้อง
    const optionsWithIndex = q.a.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    quizShuffledOptions = shuffleArray(optionsWithIndex);
    quizCorrectIndex = quizShuffledOptions.findIndex(opt => opt.originalIndex === q.correct);

    // สร้างปุ่มตัวเลือกคำตอบ
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';               // ล้างปุ่มเก่าออกก่อน
    const labels = ['ก.', 'ข.', 'ค.', 'ง.']; // ป้ายกำกับตัวเลือก
    quizShuffledOptions.forEach((opt, idx) => {              // วนลูปสร้างปุ่มทีละตัว
        const btn = document.createElement('button');
        btn.innerText = `${labels[idx]} ${opt.text}`;  // ตั้งข้อความในปุ่ม
        btn.className = "w-full py-3 px-6 text-left border-2 border-gray-200 rounded-xl hover:bg-blue-50 hover:border-blue-500 transition font-medium";
        btn.onclick = () => checkAnswer(idx, btn);  // ผูกฟังก์ชันตรวจคำตอบ
        optionsDiv.appendChild(btn);          // เพิ่มปุ่มลงในคอนเทนเนอร์
    });
}

// ฟังก์ชันตรวจคำตอบและแสดงผลลัพธ์
// idx = ดัชนีตัวเลือกที่ผู้ใช้เลือก, selectedBtn = ปุ่มที่ถูกคลิก
function checkAnswer(idx, selectedBtn) {
    const q = quizData[currentQuiz];                // ข้อมูลข้อสอบปัจจุบัน
    const isCorrect = idx === quizCorrectIndex;     // ตรวจสอบว่าตอบถูกหรือไม่ (ใช้ index หลังสุ่ม)
    if (isCorrect) score++;                          // ถ้าถูก เพิ่มคะแนน

    // หาปุ่มทั้งหมดในข้อสอบนี้
    const optionsDiv = document.getElementById('options');
    const allBtns = optionsDiv.querySelectorAll('button');

    // อัปเดตสไตล์ปุ่มทั้งหมดเพื่อแสดงผลลัพธ์
    allBtns.forEach((btn, i) => {
        btn.disabled = true;           // ปิดการใช้งานปุ่มทั้งหมด
        btn.onclick = null;            // ลบ event listener
        if (i === quizCorrectIndex) {  // ปุ่มคำตอบที่ถูกต้อง (ใช้ index หลังสุ่ม)
            btn.className = "w-full py-3 px-6 text-left border-2 rounded-xl font-medium border-green-500 bg-green-50 text-green-800";
            btn.innerHTML += ' <i class="fas fa-check text-green-600 ml-2"></i>';
        } else if (btn === selectedBtn && !isCorrect) {  // ปุ่มที่ผู้ใช้เลือกแต่ตอบผิด
            btn.className = "w-full py-3 px-6 text-left border-2 rounded-xl font-medium border-red-400 bg-red-50 text-red-700";
            btn.innerHTML += ' <i class="fas fa-times text-red-600 ml-2"></i>';
        } else {                       // ปุ่มอื่นๆ
            btn.className = "w-full py-3 px-6 text-left border-2 rounded-xl font-medium border-gray-200 text-gray-400";
        }
    });

    // แสดงคำอธิบาย (explanation) ถ้ามี
    if (q.explanation) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `mt-6 rounded-xl p-6 border-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`;
        feedbackDiv.innerHTML = `
            <div class="flex items-start">
                <div class="w-12 h-12 ${isCorrect ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'} text-white text-xl"></i>
                </div>
                <div class="flex-1">
                    <p class="font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'} text-lg mb-2">
                        ${isCorrect ? 'ถูกต้อง!' : 'ไม่ถูกต้อง'}
                    </p>
                    <p class="text-gray-700 mb-2">${q.explanation}</p>
                    ${!isCorrect ? `<p class="text-sm text-gray-500 mt-2">คำตอบที่ถูกต้อง: ${quizShuffledOptions[quizCorrectIndex].text}</p>` : ''}
                </div>
            </div>
        `;
        optionsDiv.parentElement.appendChild(feedbackDiv);
    }

    // รอ 2.5 วินาทีแล้วข้ามไปข้อถัดไป
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
    }, 2500);  // หน่วงเวลา 2.5 วินาที เพื่อให้อ่านคำอธิบาย
}

// ฟังก์ชันสำหรับแสดง/ซ่อนรูปภาพ
function toggleImage(imageId) {
    const imageElement = document.getElementById(imageId);
    if (imageElement) {
        imageElement.classList.toggle('hidden');
    }
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

// Myth Buster Challenge Game Data (8 Levels)
const mythBusterData = [
    {
        id: 1,
        scenario: "ข่าวรายงานว่า 'โรงไฟฟ้านิวเคลียร์อาจระเบิดเหมือนระเบิดปรมาณูได้'",
        myth: "โรงไฟฟ้าระเบิดได้เหมือนระเบิดนิวเคลียร์",
        question: "ข้อใดถูกต้อง?",
        options: [
            "ใช่ โรงไฟฟ้าสามารถระเบิดได้เหมือนระเบิดนิวเคลียร์",
            "ไม่ โรงไฟฟ้าทำงานที่อุณหภูมิและความดันต่ำ ไม่สามารถระเบิดได้",
            "บางครั้งก็ระเบิดได้ถ้าควบคุมไม่ดี",
            "ขึ้นอยู่กับขนาดของโรงไฟฟ้า"
        ],
        correct: 1,
        explanation: "โรงไฟฟ้านิวเคลียร์ทำงานที่อุณหภูมิและความดันต่ำมาก ไม่สามารถระเบิดเหมือนอาวุธนิวเคลียร์ที่ต้องการการออกแบบพิเศษ"
    },
    {
        id: 2,
        scenario: "เปรียบเทียบรังสีที่ได้รับ: กล้วย 1 ลูก vs อยู่ใกล้โรงไฟฟ้านิวเคลียร์ 1 ปี",
        myth: "โรงไฟฟ้าปล่อยรังสีมากกว่ากล้วย",
        question: "อะไรให้รังสีมากกว่า?",
        options: [
            "กล้วย 1 ลูก",
            "โรงไฟฟ้านิวเคลียร์ (อยู่ใกล้ 1 ปี)",
            "เท่ากัน",
            "ไม่มีรังสีทั้งคู่"
        ],
        correct: 0,
        explanation: "กล้วยมีโพแทสเซียม-40 ซึ่งเป็นไอโซโทปกัมมันตรังสีธรรมชาติ คุณได้รับรังสีจากกล้วยมากกว่าจากโรงไฟฟ้านิวเคลียร์"
    },
    {
        id: 3,
        scenario: "การผลิตไฟฟ้าแบบไหนปล่อย CO2 มากที่สุด?",
        myth: "นิวเคลียร์ทำให้เกิดมลพิษมาก",
        question: "โรงไฟฟ้าแบบใดปล่อย CO2 มากที่สุด?",
        options: [
            "นิวเคลียร์",
            "พลังงานลม",
            "พลังงานแสงอาทิตย์",
            "ถ่านหิน"
        ],
        correct: 3,
        explanation: "โรงไฟฟ้านิวเคลียร์ไม่ปล่อย CO2 ระหว่างการผลิตไฟฟ้า ถ่านหินปล่อย CO2 มากที่สุด"
    },
    {
        id: 4,
        scenario: "กากกัมมันตรังสีจากโรงไฟฟ้านิวเคลียร์ 1 ปีเท่ากับกล่องขนาดเท่าใด?",
        myth: "กากนิวเคลียร์กองเต็มโลก",
        question: "กากกัมมันตรังสี 1 ปี พอดีกับ?",
        options: [
            "สนามฟุตบอล 10 สนาม",
            "ตู้เย็น 1 ตู้",
            "สระว่ายน้ำโอลิมปิก",
            "ไม่มีกากเหลือ"
        ],
        correct: 1,
        explanation: "กากกัมมันตรังสีจากโรงไฟฟ้า 1 ปีมีปริมาณน้อยมาก พอใส่ตู้เย็นได้ มีเทคโนโลยีจัดเก็บและรีไซเคิลอย่างปลอดภัย"
    },
    {
        id: 5,
        scenario: "ความปลอดภัยของโรงไฟฟ้านิวเคลียร์เทียบกับอุตสาหกรรมอื่น",
        myth: "นิวเคลียร์ไม่ปลอดภัย 100%",
        question: "โรงไฟฟ้านิวเคลียร์มีความปลอดภัยอย่างไร?",
        options: [
            "ไม่มีมาตรการความปลอดภัย",
            "มีระบบความปลอดภัยหลายชั้น (Defense in Depth) มาตรฐานสูงกว่าอุตสาหกรรมอื่น",
            "พึ่งพาความระมัดระวังของพนักงานอย่างเดียว",
            "ปลอดภัยแค่ในวันที่ไม่มีอุบัติเหตุ"
        ],
        correct: 1,
        explanation: "โรงไฟฟ้านิวเคลียร์มีระบบความปลอดภัยหลายชั้น (Defense in Depth) และมาตรฐานที่สูงกว่าอุตสาหกรรมอื่นมาก"
    },
    {
        id: 6,
        scenario: "นิวเคลียร์ใช้ประโยชน์อะไรในชีวิตประจำวัน?",
        myth: "นิวเคลียร์ไม่มีประโยชน์",
        question: "ข้อใดเป็นประโยชน์ของนิวเคลียร์?",
        options: [
            "ใช้แค่ผลิตไฟฟ้าเท่านั้น",
            "ไม่มีประโยชน์ในชีวิตประจำวัน",
            "ใช้ในการแพทย์ X-ray, ฆ่าเชื้ออาหาร, ตรวจสอบอุตสาหกรรม",
            "ทำให้ผักสวยงาม"
        ],
        correct: 2,
        explanation: "นิวเคลียร์ใช้ประโยชน์หลากหลาย: การแพทย์ (X-ray, MRI), ฆ่าเชื้ออาหาร, ตรวจสอบคุณภาพอุตสาหกรรม, การเกษตร"
    },
    {
        id: 7,
        scenario: "ฟิชชัน (Fission) vs ฟิวชัน (Fusion) ต่างกันอย่างไร?",
        myth: "ฟิชชันและฟิวชันเหมือนกัน",
        question: "ความต่างระหว่างฟิชชันกับฟิวชัน?",
        options: [
            "เหมือนกัน แค่ชื่อต่างกัน",
            "ฟิชชัน=รวมตัว ฟิวชัน=แตกตัว",
            "ฟิชชัน=แตกตัว ฟิวชัน=รวมตัว ต้องการอุณหภูมิสูง",
            "ฟิชชันใช้ในโรงไฟฟ้า ฟิวชันใช้ทำระเบิด"
        ],
        correct: 2,
        explanation: "ฟิชชัน = นิวเคลียสขนาดใหญ่แตกตัว (ใช้ในโรงไฟฟ้า) ฟิวชัน = นิวเคลียสรวมตัว ต้องการอุณหภูมิ ~10 ล้าน C"
    },
    {
        id: 8,
        scenario: "ใครตรวจสอบมาตรฐานความปลอดภัยของโรงไฟฟ้านิวเคลียร์?",
        myth: "นักวิทยาศาสตร์ทำงานโดยไม่มีการตรวจสอบ",
        question: "องค์กรใดกำกับดูแลโรงไฟฟ้านิวเคลียร์?",
        options: [
            "ไม่มีองค์กรกำกับ",
            "IAEA (International Atomic Energy Agency) และหน่วยงานระดับชาติ",
            "แค่บริษัทที่ผลิตเอง",
            "องค์การสหประชาชาติทั่วไป"
        ],
        correct: 1,
        explanation: "IAEA และหน่วยงานกำกับดูแลระดับชาติตรวจสอบมาตรฐานความปลอดภัยอย่างเข้มงวดทั่วโลก"
    }
];

// Myth Buster Game State
let mythGame = {
    currentLevel: 0,
    score: 0,
    streak: 0,
    answered: false,
    highScore: 0,
    shuffledOptions: [],
    correctIndex: 0
};

// ฟังก์ชันสุ่มลำดับอาร์เรย์ (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize Myth Buster Game
function initMythBusterGame() {
    const gameContainer = document.getElementById('myth-game-container');
    if (!gameContainer) return;

    // Load high score from localStorage
    const savedHighScore = localStorage.getItem('mythBusterHighScore');
    if (savedHighScore) {
        mythGame.highScore = parseInt(savedHighScore);
    }

    showMythStartScreen();
}

// Show Start Screen
function showMythStartScreen() {
    const gameContainer = document.getElementById('myth-game-container');
    if (!gameContainer) return;

    gameContainer.innerHTML = `
        <div class="text-center py-12">
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i class="fas fa-search text-4xl text-white"></i>
            </div>
            <h4 class="text-3xl font-bold text-slate-800 mb-3">นิวเคลียร์: หาความจริง</h4>
            <p class="text-gray-600 mb-2 max-w-md mx-auto">ทดสอบความรู้เกี่ยวกับความเข้าใจผิดต่อนิวเคลียร์</p>
            <p class="text-sm text-blue-600 font-medium mb-8">8 ด่าน | คะแนนสูงสุด: ${mythGame.highScore}</p>
            <button onclick="startMythGame()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all">
                <i class="fas fa-play mr-2"></i>เริ่มเกม
            </button>
        </div>
    `;
}

// Start Myth Game
function startMythGame() {
    mythGame.currentLevel = 0;
    mythGame.score = 0;
    mythGame.streak = 0;
    mythGame.answered = false;
    renderMythLevel();
}

// Render Current Level
function renderMythLevel() {
    const gameContainer = document.getElementById('myth-game-container');
    if (!gameContainer) return;

    const level = mythBusterData[mythGame.currentLevel];
    const progress = ((mythGame.currentLevel + 1) / mythBusterData.length) * 100;

    // สุ่มลำดับตัวเลือกและเก็บ index ของคำตอบที่ถูกต้อง
    const optionsWithIndex = level.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
    mythGame.shuffledOptions = shuffleArray(optionsWithIndex);
    mythGame.correctIndex = mythGame.shuffledOptions.findIndex(opt => opt.originalIndex === level.correct);

    gameContainer.innerHTML = `
        <div class="max-w-2xl mx-auto">
            <!-- Progress Bar -->
            <div class="mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-sm font-medium text-gray-600">ด่าน ${mythGame.currentLevel + 1}/${mythBusterData.length}</span>
                    <span class="text-sm font-bold text-blue-600">คะแนน: ${mythGame.score}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500" style="width: ${progress}%"></div>
                </div>
            </div>

            <!-- Scenario Card -->
            <div class="bg-white rounded-2xl shadow-lg p-6 mb-6 border-l-4 border-red-500">
                <div class="flex items-start mb-4">
                    <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <i class="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                    </div>
                    <div>
                        <p class="text-sm text-red-600 font-medium mb-1">ความเชื่อผิดๆ</p>
                        <p class="text-gray-800 text-lg">${level.scenario}</p>
                    </div>
                </div>
            </div>

            <!-- Question -->
            <div class="bg-blue-50 rounded-xl p-4 mb-6">
                <p class="text-blue-800 font-medium"><i class="fas fa-question-circle mr-2"></i>${level.question}</p>
            </div>

            <!-- Options -->
            <div class="grid gap-3" id="myth-options">
                ${mythGame.shuffledOptions.map((option, index) => `
                    <button onclick="answerMythQuestion(${index})" 
                            class="option-btn bg-white border-2 border-gray-200 rounded-xl p-4 text-left hover:border-blue-400 hover:bg-blue-50 transition-all"
                            data-index="${index}">
                        <span class="font-bold text-blue-600 mr-3">${String.fromCharCode(65 + index)}.</span>
                        <span class="text-gray-700">${option.text}</span>
                    </button>
                `).join('')}
            </div>

            <!-- Feedback Area -->
            <div id="myth-feedback" class="hidden mt-6"></div>
        </div>
    `;
}

// Handle Answer
function answerMythQuestion(selectedIndex) {
    if (mythGame.answered) return;
    mythGame.answered = true;

    const level = mythBusterData[mythGame.currentLevel];
    const isCorrect = selectedIndex === mythGame.correctIndex;
    const options = document.querySelectorAll('.option-btn');
    const feedbackDiv = document.getElementById('myth-feedback');

    // Highlight correct and wrong answers
    options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === mythGame.correctIndex) {
            btn.classList.add('bg-green-100', 'border-green-500');
            btn.innerHTML += ' <i class="fas fa-check text-green-600 ml-2"></i>';
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('bg-red-100', 'border-red-500');
            btn.innerHTML += ' <i class="fas fa-times text-red-600 ml-2"></i>';
        }
    });

    // Update score and streak
    if (isCorrect) {
        mythGame.score += 100;
        mythGame.streak++;
        if (mythGame.streak >= 3) {
            mythGame.score += 50; // Bonus for streak
            mythGame.streak = 0;
        }
    } else {
        mythGame.streak = 0;
    }

    // Show feedback
    feedbackDiv.innerHTML = `
        <div class="${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} rounded-xl p-6 border-2">
            <div class="flex items-start">
                <div class="w-12 h-12 ${isCorrect ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i class="fas ${isCorrect ? 'fa-check' : 'fa-times'} text-white text-xl"></i>
                </div>
                <div class="flex-1">
                    <p class="font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'} text-lg mb-2">
                        ${isCorrect ? 'ถูกต้อง!' : 'ไม่ถูกต้อง'}
                    </p>
                    <p class="text-gray-700 mb-3">${level.explanation}</p>
                    ${mythGame.streak === 0 && isCorrect ? '<p class="text-sm text-green-600 font-medium"><i class="fas fa-fire mr-1"></i>Streak เริ่มต้นใหม่!</p>' : ''}
                    ${mythGame.streak === 0 && !isCorrect ? '' : ''}
                    ${!isCorrect ? '<p class="text-sm text-gray-500">คำตอบที่ถูกต้อง: ' + level.options[level.correct] + '</p>' : ''}
                </div>
            </div>
            <button onclick="nextMythLevel()" class="mt-4 w-full ${isCorrect ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 rounded-xl font-bold transition-colors">
                ${mythGame.currentLevel < mythBusterData.length - 1 ? 'ด่านต่อไป <i class="fas fa-arrow-right ml-2"></i>' : 'ดูผลลัพธ์ <i class="fas fa-flag-checkered ml-2"></i>'}
            </button>
        </div>
    `;
    feedbackDiv.classList.remove('hidden');

    // Update score display
    const scoreDisplay = document.querySelector('.text-blue-600.font-bold');
    if (scoreDisplay) {
        scoreDisplay.textContent = `คะแนน: ${mythGame.score}`;
    }
}

// Next Level
function nextMythLevel() {
    mythGame.currentLevel++;
    mythGame.answered = false;

    if (mythGame.currentLevel >= mythBusterData.length) {
        showMythResults();
    } else {
        renderMythLevel();
    }
}

// Show Results
function showMythResults() {
    const gameContainer = document.getElementById('myth-game-container');
    if (!gameContainer) return;

    // Update high score
    if (mythGame.score > mythGame.highScore) {
        mythGame.highScore = mythGame.score;
        localStorage.setItem('mythBusterHighScore', mythGame.highScore);
    }

    const maxScore = mythBusterData.length * 100 + Math.floor(mythBusterData.length / 3) * 50;
    const percentage = (mythGame.score / maxScore) * 100;
    let message = '';
    let icon = '';
    let colorClass = '';

    if (percentage >= 90) {
        message = 'ยอดเยี่ยม! คุณเป็นนักวิทยาศาสตร์นิวเคลียร์ตัวจริง!';
        icon = 'fa-trophy';
        colorClass = 'from-yellow-400 to-orange-500';
    } else if (percentage >= 70) {
        message = 'ดีมาก! คุณเข้าใจนิวเคลียร์ระดับดี';
        icon = 'fa-star';
        colorClass = 'from-blue-400 to-blue-600';
    } else if (percentage >= 50) {
        message = 'พอใช้! ควรศึกษาเพิ่มเติม';
        icon = 'fa-thumbs-up';
        colorClass = 'from-green-400 to-teal-500';
    } else {
        message = 'ยังมีอะไรให้เรียนรู้อีกเยอะ!';
        icon = 'fa-book-open';
        colorClass = 'from-purple-400 to-pink-500';
    }

    gameContainer.innerHTML = `
        <div class="text-center py-12">
            <div class="w-24 h-24 bg-gradient-to-br ${colorClass} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i class="fas ${icon} text-5xl text-white"></i>
            </div>
            <h4 class="text-3xl font-bold text-slate-800 mb-3">เกมจบแล้ว!</h4>
            <p class="text-xl text-gray-600 mb-6">${message}</p>
            
            <div class="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto mb-8">
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="text-center">
                        <p class="text-sm text-gray-500">คะแนนรวม</p>
                        <p class="text-3xl font-bold text-blue-600">${mythGame.score}</p>
                    </div>
                    <div class="text-center">
                        <p class="text-sm text-gray-500">คะแนนสูงสุด</p>
                        <p class="text-3xl font-bold text-purple-600">${mythGame.highScore}</p>
                    </div>
                </div>
                <div class="border-t pt-4">
                    <p class="text-sm text-gray-500 mb-1">คำตอบถูก</p>
                    <p class="text-xl font-bold text-gray-800">${Math.floor(mythGame.score / 100)}/${mythBusterData.length} ข้อ</p>
                </div>
            </div>

            <div class="flex justify-center gap-4">
                <button onclick="startMythGame()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all">
                    <i class="fas fa-redo mr-2"></i>เล่นอีกครั้ง
                </button>
                <button onclick="showMythStartScreen()" class="bg-gray-200 text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-300 transition-all">
                    <i class="fas fa-home mr-2"></i>หน้าหลัก
                </button>
            </div>
        </div>
    `;
}

// กำหนด event listener สำหรับเริ่มทำงานเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();           // เริ่มแบบทดสอบ
    setupInteractiveAtom(); // ตั้งค่าอะตอมแบบโต้ตอบ
    setupEnergyAtom();    // ตั้งค่าอะตอม Energy Meter
    initMythBusterGame(); // เริ่มเกม Myth Buster ใหม่
});
