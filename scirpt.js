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
    
    // ลบ feedback div เก่า (เฉลยข้อก่อนหน้า) ออกให้ไม่ค้างต่อกัน
    const oldFeedback = optionsDiv.parentElement.querySelector('.quiz-feedback');
    if (oldFeedback) oldFeedback.remove();
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
        feedbackDiv.className = `quiz-feedback mt-6 rounded-xl p-6 border-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`;
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

    // รอ 1.5 วินาทีแล้วข้ามไปข้อถัดไป
    setTimeout(() => {
        currentQuiz++;  // เพิ่มดัชนีข้อสอบ
        if (currentQuiz < quizData.length) {  // ยังมีข้อสอบอยู่
            loadQuiz();  // โหลดข้อถัดไป (จะล้างคำอธิบายเก่าออกโดยอัตโนมัติ)
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
    }, 1500);  // หน่วงเวลา 1.5 วินาที เพื่อให้อ่านคำอธิบาย
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

// Fake News Detector Data
const fakeNewsPool = [
    {
        id: "fake-1",
        difficulty: "easy",
        isCredible: false,
        title: "ดื่มน้ำผสมไอโอดีนหนึ่งหยด ป้องกันรังสีได้ 100% ใน 1 ชั่วโมง",
        source: "Nuclear-Health-Flash.blog",
        author: "ทีมข่าวสุขภาพเร่งด่วน",
        publishDate: "12/11/2777",
        lead: "ทีมข่าวสุขภาพเร่งด่วน: เผยสูตรลับ \"หยดไอโอดีน\" อ้างป้องกันรังสีเต็มรูปแบบ 100% [Nuclear-Health-Flash.blog] – 12 พฤศจิกายน 2777 กลายเป็นกระแสวิพากษ์วิจารณ์อย่างหนักบนโลกออนไลน์ เมื่อมีการแชร์ต่อข้อมูลจากแหล่งข่าวไม่ระบุที่มา อ้างถึงวิธีการรับมือกับภาวะวิกฤตรังสีด้วยวิธีที่ทำได้เองที่บ้าน โดยระบุว่าการ ดื่มน้ำผสมไอโอดีนเพียงหนึ่งหยด สามารถสร้างเกราะป้องกันรังสีให้ร่างกายได้ 100% ภายในเวลาเพียง 1 ชั่วโมงเท่านั้น รายละเอียดคำกล่าวอ้างบทความดังกล่าวระบุเนื้อหาสำคัญที่สร้างความแตกตื่น ดังนี้: ประสิทธิภาพเบ็ดเสร็จ: อ้างว่าสูตรนี้สามารถป้องกันรังสีได้ทันทีและสมบูรณ์แบบ โดยที่ผู้รับสาร ไม่จำเป็นต้องไปพบแพทย์ หรือพึ่งพาสถานพยาบาล กลุ่มตัวอย่างขนาดเล็ก: มีการอ้างผลการทดลองในประชากรเพียง 5 คน ซึ่งบทความสรุปว่าได้ผลลัพธ์คงที่ 100% จนไม่ต้องใช้มาตรการป้องกันอื่นร่วมด้วย องค์กรลับรับรอง: ยืนยันว่าวิธีการนี้ได้รับการรับรองจาก องค์กรวิจัยลับระดับโลก ซึ่งไม่มีการเปิดเผยชื่ออย่างเป็นทางการ ไทม์ไลน์ล่วงหน้า: ข้อมูลนี้อ้างว่ามีการเผยแพร่และใช้กันมาตั้งแต่ ปี พ.ศ. 2777 และกระตุ้นให้ผู้ใช้อินเทอร์เน็ตเร่งแชร์ต่อทันทีเพื่อช่วยชีวิตผู้อื่น",
        body: "บทความระบุว่ามีผลทดลองกับประชากร [[spot:sample-size|5 คน]] และสรุปว่า [[spot:absolute-claim|ป้องกันได้ 100% ทันที]] โดยไม่ต้องใช้มาตรการอื่น อีกทั้งยังยืนยันว่าได้รับการรับรองจาก [[spot:unknown-agency|องค์กรวิจัยลับระดับโลก]] พร้อมอ้างว่าเผยแพร่ตั้งแต่ [[spot:future-date|ปี 2777]] และแนะนำให้แชร์ต่อทันที",
        hotspots: [
            { id: "sample-size", reason: "ขนาดกลุ่มทดลองเล็กเกินไปและไม่เพียงพอทางสถิติ", isSuspicious: true },
            { id: "absolute-claim", reason: "กล่าวอ้างผลลัพธ์แบบ 100% โดยไม่มีเงื่อนไขรองรับ", isSuspicious: true },
            { id: "unknown-agency", reason: "อ้างองค์กรไม่ระบุชื่อ ตรวจสอบแหล่งที่มาไม่ได้", isSuspicious: true },
            { id: "future-date", reason: "ระบุปีเผยแพร่ในอนาคตผิดปกติ", isSuspicious: true }
        ],
        explanation: "ข่าวนี้ไม่น่าเชื่อถือ เพราะใช้วันที่อนาคต อ้างผลลัพธ์เกินจริง และอ้างแหล่งข้อมูลที่ตรวจสอบไม่ได้"
    },
    {
        id: "fake-2",
        difficulty: "easy",
        isCredible: false,
        title: "โรงไฟฟ้านิวเคลียร์ใหม่ปล่อยควันกัมมันตรังสีทำให้พืชในเมืองเปลี่ยนสี",
        source: "ข่าวจริงทันใจ 24x7",
        author: "นักข่าวอิสระไม่เปิดเผยชื่อ",
        publishDate: "03/08/2026",
        lead: "ระทึก! ชาวเมืองผวา โรงไฟฟ้าใหม่ปล่อยควันกัมมันตรังสี ทำพืชเปลี่ยนสี-ป่วยพุ่งเฉียดแสน [ข่าวจริงทันใจ 24x7] – 3 สิงหาคม 2026 รายงานโดย: นักข่าวอิสระ (ไม่เปิดเผยชื่อ) เกิดกระแสความหวาดกลัวอย่างรุนแรงในพื้นที่รอบโรงไฟฟ้าพลังงานนิวเคลียร์แห่งใหม่ หลังจากมีรายงานแพร่สะพัดว่าการเดินเครื่องโรงไฟฟ้าส่งผลกระทบต่อระบบนิเวศและสุขภาพของประชาชนอย่างรุนแรง โดยมีการเผยแพร่ภาพถ่ายพืชพรรณในเมืองที่เริ่มมีสีผิดปกติ ซึ่งอ้างว่าเป็นผลมาจากการปนเปื้อนในชั้นบรรยากาศ คำกล่าวอ้างจากแหล่งข่าว รายงานจากโพสต์ต้นทางระบุรายละเอียดที่น่าตกใจ ดังนี้: ควันสีขาวคือภัยเงียบ: แหล่งข่าวอ้างว่าควันสีขาวที่พวยพุ่งออกมาจากปล่องระบายนั้นคือ \"รังสีบริสุทธิ์\" ที่มีความเข้มข้นสูงและเป็นอันตรายต่อสิ่งมีชีวิตทันทีที่สัมผัส ปล่อยมลพิษไร้การควบคุม: มีการระบุว่าโรงไฟฟ้าแห่งนี้ \"ปล่อยควันกัมมันตรังสีทุกวัน\" โดยไม่มีการติดตั้งระบบกรองอากาศหรือมาตรการป้องกันรั่วไหลใดๆ วิกฤตสาธารณสุข: ข้อมูลอ้างว่าพบประชาชนในพื้นที่ล้มป่วยด้วยอาการลึกลับ พร้อมกันถึง 70,000 คนภายในวันเดียว อย่างไรก็ตาม กลับไม่มีการระบุชื่อโรงพยาบาลหรือบันทึกการรับผู้ป่วยจากสถานพยาบาลในพื้นที่แม้แต่แห่งเดียว หลักฐานพยาน: เนื้อหาข่าวมีการอ้างอิงคำพูดของ \"พยานนิรนาม\" ที่ระบุว่าเห็นความผิดปกติด้วยตาเปล่า พร้อมแนบภาพประกอบความเสียหายของอาคารและพื้นที่ปนเปื้อน",
        body: "เนื้อหากล่าวว่าโรงไฟฟ้าปล่อย [[spot:steam-claim|ควันกัมมันตรังสีทุกวัน]] โดยไม่มีระบบกรอง และยืนยันว่าประชาชนในพื้นที่ [[spot:no-evidence-count|ป่วยพร้อมกัน 70,000 คนในวันเดียว]] โดยไม่แนบข้อมูลโรงพยาบาล อีกทั้งยังใช้ภาพจากเหตุการณ์ [[spot:old-photo|ภัยพิบัติเมื่อ 20 ปีก่อน]] และอ้างคำพูดจาก [[spot:unknown-witness|พยานนิรนาม]] มาเป็นหลักฐานประกอบ",
        hotspots: [
            { id: "steam-claim", reason: "เหมารวมไอน้ำเป็นรังสีโดยไม่มีข้อมูลเชิงเทคนิคสนับสนุน", isSuspicious: true },
            { id: "no-evidence-count", reason: "อ้างตัวเลขผู้ป่วยจำนวนมากแต่ไม่มีแหล่งข้อมูลรองรับ", isSuspicious: true },
            { id: "old-photo", reason: "ใช้ภาพเก่าต่างบริบทมาสร้างความเข้าใจผิด", isSuspicious: true },
            { id: "unknown-witness", reason: "อ้างพยานนิรนามโดยไม่มีหลักฐานยืนยันตัวตน", isSuspicious: true }
        ],
        explanation: "ข่าวนี้บิดเบือนบริบทและใช้ภาพเก่าเพื่อชี้นำอารมณ์ มากกว่าการให้ข้อมูลตรวจสอบได้"
    },
    {
        id: "fake-3",
        difficulty: "medium",
        isCredible: false,
        title: "นักวิทยาศาสตร์ยืนยัน: ใส่กำไลแม่เหล็กกันรังสีได้ตลอดชีวิต",
        source: "super-protection-now.net",
        author: "ฝ่ายวิจัยผลิตภัณฑ์",
        publishDate: "19/01/2026",
        lead: "วงการวิทย์ตะลึง! เปิดตัว \"กำไลแม่เหล็ก\" นวัตกรรมกันรังสีตลอดชีวิต ไม่ต้องพบแพทย์อีกต่อไป [super-protection-now.net] – 19 มกราคม 2026 รายงานโดย: ฝ่ายวิจัยผลิตภัณฑ์ กลายเป็นที่ฮือฮาในกลุ่มผู้รักสุขภาพและผู้อยู่ใกล้ชิดแหล่งกำเนิดรังสี เมื่อมีการประกาศความสำเร็จของผลิตภัณฑ์ใหม่ กำไลแม่เหล็กป้องกันรังสี ซึ่งอ้างว่าเป็นทางออกสุดท้ายในการปกป้องร่างกายจากภัยเงียบรอบตัว โดยสามารถป้องกันรังสีได้ทุกชนิดแบบถาวรและครอบคลุมตลอดช่วงชีวิต รายละเอียดข้อกล่าวอ้างและสรรพคุณ ข้อมูลบนเว็บไซต์ได้ระบุคุณสมบัติที่น่าตกใจของผลิตภัณฑ์ ดังนี้: การป้องกันระดับสมบูรณ์: โฆษณาว่ากำไลนี้สามารถทำหน้าที่แทนการตรวจสุขภาพทางรังสีได้ทั้งหมด ผู้ใช้งาน ไม่จำเป็นต้องพบแพทย์หรือตรวจวัดปริมาณรังสีในร่างกายอีกต่อไป เพราะกำไลจะทำหน้าที่เป็นเกราะกำบัง 24 ชั่วโมง การรับประกันสุดโต่ง: เพื่อสร้างความมั่นใจ ทางเว็บไซต์ประกาศ คืนเงิน 500% หากผู้ใช้ยังได้รับรังสี แม้จะไม่มีการระบุวิธีตรวจวัดผลลัพธ์ที่เป็นรูปธรรมแก่ผู้ซื้อ งานวิจัยที่ไม่มีแหล่งที่มา: มีการใช้คำว่า อ้างอิงงานวิจัยนานาชาติ อย่างแพร่หลายทั่วหน้าเว็บ แต่กลับ ไม่ให้ลิงก์ข้อมูลต้นทาง ไม่ระบุชื่อผู้วิจัย หรือชื่อวารสารทางวิทยาศาสตร์ที่ตีพิมพ์แต่อย่างใด รีวิวเชิงบวกแบบไร้ที่มา: มีการลงข้อความยืนยันจากผู้ใช้ที่ระบุว่า ทุกคนพอใจ 100% โดยภาพประกอบและชื่อผู้ใช้งานไม่มีตัวตนจริงหรือระบุที่มาได้",
        body: "หน้าเว็บใส่คำว่า [[spot:no-reference|อ้างอิงงานวิจัยนานาชาติ]] แต่ไม่ให้ลิงก์หรือรายละเอียดผู้วิจัย มีข้อความโฆษณาว่า [[spot:too-good|คืนเงิน 500% หากยังได้รับรังสี]] และกล่าวว่า [[spot:replace-medical|ไม่จำเป็นต้องพบแพทย์อีกต่อไป]] พร้อมใส่รีวิวที่ไม่ระบุที่มาว่า [[spot:anonymous-review|ผู้ใช้ทุกคนพอใจ 100%]]",
        hotspots: [
            { id: "no-reference", reason: "กล่าวถึงงานวิจัยแต่ไม่ให้ข้อมูลอ้างอิงจริง", isSuspicious: true },
            { id: "too-good", reason: "คำกล่าวเกินจริงและขัดกับหลักวิทยาศาสตร์", isSuspicious: true },
            { id: "replace-medical", reason: "ชักชวนให้แทนที่การดูแลจากแพทย์โดยไม่มีหลักฐานรองรับ", isSuspicious: true },
            { id: "anonymous-review", reason: "รีวิวอ้างผลลัพธ์สมบูรณ์แบบโดยไม่ระบุที่มา", isSuspicious: true }
        ],
        explanation: "ข่าวนี้เป็นเชิงโฆษณาเกินจริงและไม่มีหลักฐานวิชาการตรวจสอบย้อนกลับ"
    },
    {
        id: "real-1",
        difficulty: "easy",
        isCredible: true,
        title: "โรงพยาบาลจังหวัดเปิดบริการ SPECT/CT สำหรับผู้ป่วยโรคต่อมไทรอยด์",
        source: "ศูนย์ข่าวโรงพยาบาลรัฐ",
        author: "กองสื่อสารองค์กร",
        publishDate: "21/02/2026",
        lead: "ยกระดับการรักษา! โรงพยาบาลจังหวัดเปิดตัวเทคโนโลยี SPECT/CT ตรวจวินิจฉัยโรคต่อมไทรอยด์แม่นยำสูง [ศูนย์ข่าวโรงพยาบาลรัฐ] – 21 กุมภาพันธ์ 2026 รายงานโดย: กองสื่อสารองค์กร โรงพยาบาลจังหวัดประกาศความพร้อมเปิดให้บริการเทคโนโลยีการแพทย์นิวเคลียร์ SPECT/CT (Single Photon Emission Computed Tomography/Computed Tomography) เพื่อเพิ่มประสิทธิภาพในการวินิจฉัยและวางแผนรักษาผู้ป่วยโรคต่อมไทรอยด์และมะเร็งไทรอยด์อย่างเต็มรูปแบบ เริ่มให้บริการอย่างเป็นทางการตั้งแต่วันนี้เป็นต้นไป รายละเอียดการให้บริการและขั้นตอน เพื่อให้การรับบริการเป็นไปอย่างเป็นระบบ ทางโรงพยาบาลได้กำหนดแนวทางปฏิบัติดังนี้: ขั้นตอนการนัดหมาย: ผู้ป่วยที่มีความประสงค์เข้ารับการตรวจต้องผ่านการประเมินจากอายุรแพทย์โรคต่อมไร้ท่อ เพื่อออกใบส่งตัวและนัดหมายวันตรวจล่วงหน้า ณ แผนกเวชศาสตร์นิวเคลียร์ การเตรียมตัว: มีการระบุเอกสารอ้างอิงเวชปฏิบัติชัดเจนเกี่ยวกับการงดอาหารหรือยาบางชนิดที่มีไอโอดีนเป็นส่วนประกอบก่อนการตรวจ เวลาทำการ: เปิดให้บริการในวันและเวลาราชการ โดยจำกัดจำนวนผู้ป่วยต่อวันเพื่อให้เป็นไปตามมาตรฐานความปลอดภัย ความปลอดภัยและการใช้สารรังสี ในประกาศของโรงพยาบาลมีการระบุถึงการใช้ \"สารกัมมันตรังสี\" ซึ่งอาจสร้างความกังวลให้แก่ผู้รับบริการ อย่างไรก็ตาม ทางกองสื่อสารองค์กรได้ชี้แจงประเด็นสำคัญดังนี้: ปริมาณต่ำตามมาตรฐาน: การตรวจ SPECT/CT ใช้สารรังสีในปริมาณที่ต่ำมาก (Low-dose radioactive tracer) ซึ่งเพียงพอต่อการสร้างภาพเพื่อการวินิจฉัยเท่านั้น แนวทางเวชปฏิบัติ: ขั้นตอนทั้งหมดอ้างอิงตามมาตรฐานสากลและแนวทางของสมาคมเวชศาสตร์นิวเคลียร์ เพื่อให้มั่นใจว่าผู้ป่วยจะได้รับผลกระทบจากรังสีน้อยที่สุด การกำจัดสารออกจากร่างกาย: สารรังสีที่ได้รับจะสลายตัวและถูกขับออกจากร่างกายผ่านทางปัสสาวะตามธรรมชาติภายในระยะเวลาอันสั้น",
        body: "ประกาศระบุว่าการตรวจใช้สารรังสีปริมาณต่ำตามแนวทางเวชปฏิบัติ และมีการอ้างถึง [[decoy:radiation-word|คำว่า 'รังสี']] ซึ่งอาจทำให้ผู้อ่านกังวล แต่ข้อมูลทั้งหมดมีเอกสารและขั้นตอนชัดเจน",
        hotspots: [
            { id: "radiation-word", reason: "คำว่ารังสีเพียงอย่างเดียวไม่ใช่หลักฐานว่าข่าวปลอม", isSuspicious: false }
        ],
        explanation: "ข่าวนี้น่าเชื่อถือ เพราะมีแหล่งหน่วยงานชัดเจน มีรายละเอียดการให้บริการ และไม่มีข้ออ้างเกินจริง"
    },
    {
        id: "real-2",
        difficulty: "medium",
        isCredible: true,
        title: "รายงานความปลอดภัยโรงไฟฟ้ารายไตรมาสเผยค่ารังสีต่ำกว่าเกณฑ์กำกับดูแล",
        source: "สำนักงานกำกับดูแลพลังงาน",
        author: "ฝ่ายติดตามความปลอดภัย",
        publishDate: "30/03/2026",
        lead: "รายงานความปลอดภัยรายไตรมาส: ค่ารังสีรอบโรงไฟฟ้าอยู่ในระดับปกติ ต่ำกว่าเกณฑ์กำกับดูแลสากล [สำนักงานกำกับดูแลพลังงาน] – 30 มีนาคม 2026 รายงานโดย: ฝ่ายติดตามความปลอดภัย สำนักงานกำกับดูแลพลังงานได้เผยแพร่รายงานสรุปผลการตรวจสอบความปลอดภัยทางรังสีประจำไตรมาสที่ 1 ประจำปี 2026 โดยยืนยันว่าผลการตรวจวัดปริมาณรังสีในสิ่งแวดล้อมรอบสถานประกอบการนิวเคลียร์และพื้นที่ใกล้เคียงอยู่ในระดับที่ปลอดภัยอย่างต่อเนื่อง สรุปข้อมูลการตรวจวัดและระบบตรวจสอบ รายงานฉบับนี้มีความละเอียดสูง โดยมีการเปิดเผยรายละเอียดที่สำคัญเพื่อความโปร่งใสดังนี้: ความถี่ในการตรวจวัด: ฝ่ายติดตามความปลอดภัยได้ดำเนินเก็บข้อมูล \"รายสัปดาห์\" ตลอดช่วงเดือนมกราคมถึงมีนาคม เพื่อตรวจสอบการเปลี่ยนแปลงของค่ารังสีในสภาพอากาศและแหล่งน้ำ ความโปร่งใสของข้อมูล: มีการจัดทำ \"ตารางเปิดเผยข้อมูล\" ที่ระบุช่วงค่าการตรวจวัด (Range of Measurement) ในแต่ละพื้นที่อย่างชัดเจน พร้อมให้สาธารณชนเข้าถึงข้อมูลดิบเพื่อการตรวจสอบย้อนกลับ มาตรฐานเครื่องมือ: รายงานระบุถึง \"วิธีการสอบเทียบเครื่องมือ (Calibration)\" ที่ดำเนินการตามวงรอบมาตรฐาน เพื่อให้มั่นใจว่าหัววัดรังสีทุกตัวให้ผลการวัดที่เที่ยงตรงตามคู่มือกำกับดูแลฉบับล่าสุด",
        body: "เอกสารระบุช่วงค่าการตรวจวัดพร้อมตารางเปิดเผยข้อมูล และอ้างอิงคู่มือกำกับดูแลฉบับล่าสุด ผู้เขียนยังอธิบายความต่างระหว่าง [[decoy:low-value|ค่าต่ำกว่าเกณฑ์]] กับค่าศูนย์อย่างชัดเจน",
        hotspots: [
            { id: "low-value", reason: "ค่าต่ำกว่าเกณฑ์ไม่ใช่สัญญาณข่าวปลอม", isSuspicious: false }
        ],
        explanation: "ข่าวนี้น่าเชื่อถือเพราะมีตัวเลขตรวจวัด วิธีการวัด และเอกสารกำกับดูแลตรวจสอบได้"
    },
    {
        id: "real-3",
        difficulty: "hard",
        isCredible: true,
        title: "คณะฟิสิกส์ประยุกต์ร่วมกับศูนย์ข้อมูลวิทยาศาสตร์เปิด เผยแพร่ฐานข้อมูลรังสีพื้นหลังระดับประเทศเพื่อการวิจัยสาธารณะ",
        source: "ศูนย์ข้อมูลวิทยาศาสตร์เปิด (Open Science Data Center)",
        author: "คณะทำงานวิจัยนิวเคลียร์ฟิสิกส์และมาตรวิทยารังสี",
        publishDate: "07/04/2026",
        lead: "คณะฟิสิกส์ประยุกต์ยกระดับความโปร่งใสทางวิทยาศาสตร์ เปิดตัวพอร์ทัลข้อมูลเปิด (Open Data Portal) รวบรวมผลการตรวจวัดปริมาณรังสีพื้นหลังรายจังหวัดทั่วประเทศแบบเชิงลึก พร้อมเผยแพร่คู่มือเทคนิคการแปลผลและวิเคราะห์นัยสำคัญทางสถิติ (Statistical Significance) เพื่อสนับสนุนงานวิจัยระดับมหภาคและสร้างบรรทัดฐานใหม่ในการเฝ้าระวังความปลอดภัยทางรังสีสำหรับภาคประชาชน",
        body: "คณะฟิสิกส์ประยุกต์ประกาศความสำเร็จในการจัดทำโครงการเฝ้าระวังรังสีระดับภูมิภาค โดยการเปิดให้สาธารณชนเข้าถึงฐานข้อมูล 'National Background Radiation Map 2026' ซึ่งเป็นการรวบรวมข้อมูลดิบจากการตรวจวัดภาคสนามอย่าง [[decoy:data-duration|ต่อเนื่องตลอด 24 เดือนที่ผ่านมา]] รายงานฉบับนี้ประกอบด้วยชุดข้อมูลขนาดใหญ่ (Dataset) ที่แสดงค่าเฉลี่ยรายวัน ส่วนเบี่ยงเบนมาตรฐาน (Standard Deviation) และการวิเคราะห์ค่าความเข้มข้นของรังสีในพื้นที่ที่มี [[decoy:geology-diff|ลักษณะทางธรณีวิทยาแตกต่างกัน]] เนื้อหาเชิงลึกในคู่มือมีการอธิบายถึง [[decoy:instrumental-drift|'Instrumental Drift']] หรือการคลาดเคลื่อนเชิงระบบของเครื่องมือวัดแต่ละประเภทที่อาจเกิดขึ้นตามสภาพอากาศ และเน้นย้ำในส่วนบทนำว่าข้อมูลทุกชุดตัวอย่าง [[decoy:uncertainty|มีค่าความไม่แน่นอนทางสถิติ (Statistical Uncertainty)]] ซึ่งเป็นธรรมชาติปกติของการวัดทางฟิสิกส์ที่ไม่สามารถหลีกเลี่ยงได้ ข้อมูลนี้ได้รับการตรวจสอบความเที่ยงตรง (Validation) ผ่านกระบวนการเปรียบเทียบระหว่างห้องปฏิบัติการที่ได้รับ [[decoy:iso-standard|มาตรฐาน ISO/IEC 17025]] เพื่อให้มั่นใจว่าผลลัพธ์ที่เผยแพร่มีความโปร่งใสและสามารถนำไปใช้เป็นบรรทัดฐานในการเฝ้าระวังความปลอดภัยทางรังสีในระดับท้องถิ่นได้อย่างมีประสิทธิภาพ",
        hotspots: [
            { 
                id: "data-duration", 
                reason: "การเก็บข้อมูลระยะยาว (24 เดือน) ช่วยลดความคลาดเคลื่อนจากปัจจัยทางฤดูกาล ซึ่งเป็นแนวทางวิจัยที่น่าเชื่อถือ", 
                isSuspicious: false 
            },
            { 
                id: "geology-diff", 
                reason: "รังสีพื้นหลังแปรผันตามประเภทของหินและดินในแต่ละพื้นที่ (เช่น พื้นที่แกรนิตจะมีรังสีสูงกว่า) การระบุจุดนี้จึงแสดงถึงความถูกต้องทางวิชาการ", 
                isSuspicious: false 
            },
            { 
                id: "instrumental-drift", 
                reason: "การยอมรับว่าเครื่องมือมีการคลาดเคลื่อนตามสภาพแวดล้อมและระบุวิธีแก้ไข เป็นลักษณะของรายงานมาตรวิทยาที่โปร่งใส", 
                isSuspicious: false 
            },
            { 
                id: "uncertainty", 
                reason: "การระบุค่าความไม่แน่นอนเป็นแนวปฏิบัติทางวิทยาศาสตร์ที่ถูกต้อง (Scientific Integrity) มากกว่าการยืนยันตัวเลขด้านเดียว", 
                isSuspicious: false 
            },
            { 
                id: "iso-standard", 
                reason: "ISO/IEC 17025 คือมาตรฐานสากลว่าด้วยความสามารถของห้องปฏิบัติการทดสอบและสอบเทียบ ซึ่งเป็นข้อพิสูจน์ความน่าเชื่อถือระดับสากล", 
                isSuspicious: false 
            }
        ],
        explanation: "ข่าวนี้น่าเชื่อถือสูงเนื่องจากใช้กระบวนการทางวิทยาศาสตร์ที่ครบถ้วน ตั้งแต่การเก็บข้อมูลระยะยาว การอ้างอิงมาตรฐาน ISO ไปจนถึงการเปิดเผยข้อจำกัดของเครื่องมือและค่าความไม่แน่นอนอย่างตรงไปตรงมา"
    },
    {
        id: "fake-4",
        difficulty: "hard",
        isCredible: false,
        title: "แอปมือถือสแกนรังสีในร่างกายได้แม่นยำเท่าเครื่องโรงพยาบาล",
        source: "Future Miracle Tech",
        author: "แอดมินเพจ",
        publishDate: "11/05/2026",
        lead: "วงการแพทย์สั่นคลอน! เปิดตัวแอปฯ มือถือสแกนรังสีแม่นยำ 100% อ้างใช้แทนเครื่องตรวจโรงพยาบาลได้ทันที [Future Miracle Tech] – 11 พฤษภาคม 2026 รายงานโดย: แอดมินเพจ กลายเป็นกระแสทอล์กออฟเดอะทาวน์ในโลกเทคโนโลยี เมื่อมีการเปิดตัวแอปพลิเคชันใหม่ที่อ้างว่าสามารถเปลี่ยนสมาร์ตโฟนทั่วไปให้กลายเป็นเครื่องตรวจวัดรังสีประสิทธิภาพสูง โดยระบุว่ามีความละเอียดและแม่นยำยิ่งกว่าอุปกรณ์ในห้องปฏิบัติการทางการแพทย์ ทำให้ผู้ใช้งานสามารถตรวจสอบความผิดปกติได้เองทุกที่ทุกเวลา รายละเอียดและข้อโฆษณาชวนเชื่อ หน้าเว็บไซต์และเพจดังกล่าวได้ระบุสรรพคุณที่น่าเหลือเชื่อ ดังนี้: ประสิทธิภาพระดับห้องแล็บ: บทความอ้างว่าเซนเซอร์ในสมาร์ตโฟนทั่วไปสามารถตรวจวัดรังสีได้ละเอียดกว่าการตรวจในโรงพยาบาล และ \"ไม่จำเป็นต้องเข้ารับการตรวจทางการแพทย์อีกต่อไป\" ความแม่นยำไร้การสอบเทียบ: มีการลงรีวิวจากผู้ใช้งานที่ระบุว่าระบบให้ผล \"แม่นยำ 100% โดยไม่ต้องมีการสอบเทียบมาตรฐาน (Calibration)\" แม้จะใช้กับมือถือต่างรุ่นกัน การโน้มน้าวใจด้วยความกลัวและความประหยัด: เน้นย้ำข้อความ \"ไม่ต้องไปโรงพยาบาลอีกแล้ว\" เพื่อดึงดูดกลุ่มคนที่มีความกังวลเรื่องค่าใช้จ่ายในการตรวจสุขภาพ โปรโมชันเร่งด่วน: กระตุ้นให้ผู้สนใจตัดสินใจซื้อทันทีด้วยกลยุทธ์ \"ลดราคาพิเศษ หมดเขตภายใน 10 นาทีทั่วประเทศ\" เพื่อบีบให้ผู้ซื้อไม่มีเวลาไตร่ตรองข้อมูล",
        body: "บทความอ้างว่าสมาร์ตโฟนทั่วไปตรวจรังสีได้ละเอียดกว่าห้องแล็บ และมีผู้ใช้รีวิวว่า [[spot:no-method|ใช้งานแล้วแม่นยำ 100% โดยไม่ต้องสอบเทียบ]] พร้อมข้อความว่า [[spot:replace-clinic|ไม่ต้องไปโรงพยาบาลอีกแล้ว]] และกระตุ้นให้ซื้อทันทีด้วยโปรโมชัน [[spot:urgent-sale|หมดเขตใน 10 นาทีทั่วประเทศ]] นอกจากนี้ยังอ้างว่าแอปนี้ [[spot:no-regulation|ไม่ต้องขออนุญาตจากองค์กรกำกับดูแลเพราะเป็นเทคโนโลยีใหม่]] และใช้ [[spot:fake-testimonial|รีวิวจากผู้ใช้ที่ไม่มีชื่อจริงและไม่สามารถตรวจสอบย้อนกลับได้]] ทั้งนี้ การตรวจวัดรังสีทางการแพทย์ [[decoy:medical-device|ต้องใช้เครื่องมือที่ผ่านการรับรองมาตรฐานและสอบเทียบตามกำหนด]] และข้อมูลทางวิทยาศาสตร์ที่ถูกต้องต้องมี [[decoy:repeatable|การทดลองที่สามารถทำซ้ำได้และให้ผลลัพธ์เทียบเท่ากัน]] รวมถึง [[decoy:professional-interpret|การแปลผลโดยผู้เชี่ยวชาญที่มีใบประกอบวิชาชีพ]]",
        hotspots: [
            { 
                id: "no-method", 
                reason: "อ้างความแม่นยำสูงสุด 100% โดยไม่มีวิธีวัดที่ตรวจสอบได้ การสอบเทียบมาตรฐาน หรือการศึกษาทางวิทยาศาสตร์รองรับ", 
                isSuspicious: true 
            },
            { 
                id: "replace-clinic", 
                reason: "ชี้นำให้เลี่ยงการตรวจทางการแพทย์ที่จำเป็นและมีมาตรฐาน อาจทำให้ผู้ป่วยพลาดการวินิจฉัยที่ถูกต้อง", 
                isSuspicious: true 
            },
            { 
                id: "urgent-sale", 
                reason: "ใช้แรงกดดันด้านเวลาเพื่อเร่งให้ตัดสินใจซื้อทันที แทนที่จะให้เวลาศึกษาข้อมูลทางวิทยาศาสตร์อย่างรอบคอบ", 
                isSuspicious: true 
            },
            { 
                id: "no-regulation", 
                reason: "อ้างว่าเป็นเทคโนโลยีใหม่ที่ไม่ต้องขออนุญาตจากองค์กรกำกับดูแล ซึ่งเป็นไปไม่ได้สำหรับอุปกรณ์ทางการแพทย์ที่เกี่ยวข้องกับการวินิจฉัย", 
                isSuspicious: true 
            },
            { 
                id: "fake-testimonial", 
                reason: "ใช้รีวิวจากผู้ใช้ที่ไม่ระบุชื่อจริง ไม่มีข้อมูลติดต่อ หรือไม่สามารถตรวจสอบย้อนกลับได้ ซึ่งเป็นเทคนิคการตลาดที่พบในสินค้าหลอกลวง", 
                isSuspicious: true 
            },
            { 
                id: "medical-device", 
                reason: "การอธิบายว่าเครื่องมือทางการแพทย์ต้องผ่านการรับรองมาตรฐานและสอบเทียบตามกำหนดเป็นข้อมูลที่ถูกต้องตามกฎระเบียบ ไม่ใช่จุดน่าสงสัย", 
                isSuspicious: false 
            },
            { 
                id: "repeatable", 
                reason: "การกล่าวถึงการทดลองที่ทำซ้ำได้ (Repeatable Experiment) และให้ผลเทียบเท่ากันเป็นหลักการพื้นฐานของวิทยาศาสตร์ที่ถูกต้อง", 
                isSuspicious: false 
            },
            { 
                id: "professional-interpret", 
                reason: "การแปลผลโดยผู้เชี่ยวชาญที่มีใบประกอบวิชาชีพเป็นมาตรฐานทางการแพทย์ที่ถูกต้อง ไม่ใช่ลักษณะข่าวปลอม", 
                isSuspicious: false 
            }
        ],
        explanation: "ข่าวนี้ไม่น่าเชื่อถือ เพราะอวดอ้างความแม่นยำเกินจริงและไม่มีรายละเอียดวิธีการทดสอบ"
    },
    {
        id: "fake-5",
        difficulty: "medium",
        isCredible: false,
        title: "รัฐบาลต่างประเทศประกาศยกเลิกการใช้รังสีรักษามะเร็งทั่วโลกแล้ว",
        source: "Global Shock Update",
        author: "ทีมข่าวพลเมือง",
        publishDate: "05/06/2026",
        lead: "ด่วนระดับโลก! รัฐบาลต่างประเทศประกาศยกเลิกการใช้รังสีรักษามะเร็งทั่วโลกแล้ว หลังพบวิธีรักษาทางเลือกใหม่หายขาด 100% ภายใน 24 ชั่วโมง [Global Shock Update] – 5 มิถุนายน 2026 รายงานโดย: ทีมข่าวพลเมือง เกิดความโกลาหลในวงการแพทย์และผู้ป่วยมะเร็งทั่วโลก เมื่อมีข่าวแพร่สะพัดว่ามีคำสั่งระดับโลกให้ยกเลิกการใช้รังสีรักษามะเร็งอย่างทันที อ้างว่ามีวิธีรักษาทางเลือกใหม่ที่สามารถรักษาให้หายขาดได้ 100% ภายในเวลาเพียง 24 ชั่วโมงเท่านั้น โดยไม่ต้องเจ็บปวดจากการฉายรังสีอีกต่อไป รายละเอียดและข้อกล่าวอ้าง บทความดังกล่าวระบุรายละเอียดที่น่าตกใจ ดังนี้: คำสั่งกลางทั่วโลก: อ้างว่ามีการประกาศคำสั่งระดับโลกจากหน่วยงานที่ไม่ระบุชื่อประเทศหรือเอกสารทางการอย่างเป็นทางการ ให้ยกเลิกการใช้รังสีรักษามะเร็งทั้งหมดทันที ผลลัพธ์ที่อัศจรรย์: อ้างว่าวิธีรักษาทางเลือกใหม่สามารถทำให้ผู้ป่วยมะเร็งหายขาด 100% ภายในเวลาเพียง 24 ชั่วโมง โดยไม่ต้องผ่านการรักษาระยะยาวหรือมีผลข้างเคียง หน่วยงานสากลลับ: อ้างว่าได้รับการยืนยันจาก 'คณะกรรมการสากล' แต่ไม่ระบุชื่อจริง ที่อยู่ หรือขอบเขตอำนาจของหน่วยงานดังกล่าว ยาสมุนไพรพิเศษ: ระบุว่ามียาสมุนไพรธรรมชาติที่สามารถรักษาได้ทุกชนิดมะเร็งโดยไม่มีผลข้างเคียงใดๆ โดยไม่ต้องมีหลักฐานทางวิทยาศาสตร์รองรับ",
        body: "เนื้อหากล่าวถึง [[spot:global-order|คำสั่งกลางทั่วโลก]] แต่ไม่ระบุประเทศหรือเอกสารประกาศ อ้างว่าวิธีรักษาทางเลือกใหม่ทำให้ [[spot:instant-cure|หายขาด 100% ภายใน 24 ชั่วโมง]] และบอกว่าได้รับการยืนยันจาก [[spot:no-organization|คณะกรรมการสากล]] โดยไม่ระบุชื่อจริง นอกจากนี้ยังมีการ [[spot:no-evidence|อ้างผลการทดลองแต่ไม่ให้ข้อมูลวิธีวิจัยและจำนวนตัวอย่าง]] และระบุว่ามี [[spot:miracle-claim|ยาสมุนไพรธรรมชาติที่ไม่มีผลข้างเคียงและรักษาได้ทุกชนิดมะเร็ง]] ทั้งนี้ การรักษามะเร็งด้วยรังสี [[decoy:standard-procedure|เป็นมาตรฐานทางการแพทย์ที่มีการควบคุมคุณภาพและติดตามผลระยะยาว]] และข้อมูลทางวิชาการที่ถูกต้องต้องมี [[decoy:peer-review|การตรวจสอบโดยผู้เชี่ยวชาญอิสระ (Peer Review)]] รวมถึง [[decoy:clinical-trial|การทดลองทางคลินิกที่มีการควบคุมและเปรียบเทียบกับกลุ่มควบคุม]]",
        hotspots: [
            { 
                id: "global-order", 
                reason: "อ้างคำสั่งใหญ่ระดับโลกแต่ไม่ระบุประเทศ หน่วยงาน หรือเอกสารประกาศทางการที่ตรวจสอบได้", 
                isSuspicious: true 
            },
            { 
                id: "instant-cure", 
                reason: "อ้างผลการรักษา 100% ภายใน 24 ชั่วโมง ซึ่งเป็นไปไม่ได้ในทางการแพทย์ที่ต้องมีระยะเวลาติดตามผลและตัวแปรเฉพาะบุคคล", 
                isSuspicious: true 
            },
            { 
                id: "no-organization", 
                reason: "อ้างหน่วยงานกำกับดูแลแบบคลุมเครือ ('คณะกรรมการสากล') โดยไม่ระบุชื่อจริง ที่อยู่ หรือขอบเขตอำนาจ", 
                isSuspicious: true 
            },
            { 
                id: "no-evidence", 
                reason: "อ้างผลการทดลองแต่ไม่ให้รายละเอียดวิธีวิจัย จำนวนตัวอย่าง หรือแหล่งเผยแพร่ในวารสารวิชาการที่ตรวจสอบได้", 
                isSuspicious: true 
            },
            { 
                id: "miracle-claim", 
                reason: "อ้างว่ามียาธรรมชาติที่รักษาได้ทุกชนิดมะเร็งโดยไม่มีผลข้างเคียง ซึ่งเป็นลักษณะการโฆษณาเกินจริงที่พบในข่าวลวง", 
                isSuspicious: true 
            },
            { 
                id: "standard-procedure", 
                reason: "การอธิบายมาตรฐานการรักษาที่มีการควบคุมคุณภาพและติดตามผลระยะยาวเป็นข้อมูลทางการแพทย์ที่ถูกต้อง ไม่ใช่จุดน่าสงสัย", 
                isSuspicious: false 
            },
            { 
                id: "peer-review", 
                reason: "การกล่าวถึงกระบวนการตรวจสอบโดยผู้เชี่ยวชาญอิสระ (Peer Review) เป็นลักษณะของข้อมูลวิชาการที่มีคุณภาพและน่าเชื่อถือ", 
                isSuspicious: false 
            },
            { 
                id: "clinical-trial", 
                reason: "การอ้างอิงการทดลองทางคลินิกที่มีการควบคุม (Controlled Clinical Trial) เป็นมาตรฐานทางวิทยาศาสตร์ที่ถูกต้อง", 
                isSuspicious: false 
            }
        ],
        explanation: "ข่าวนี้ไม่น่าเชื่อถือ เพราะใช้คำกล่าวใหญ่ระดับโลกโดยไม่มีหลักฐาน และมีคำอ้างรักษาเกินจริง"
    },
    {
        id: "real-4",
        difficulty: "hard",
        isCredible: true,
        title: "ศูนย์เวชศาสตร์นิวเคลียร์แห่งชาติประกาศความสำเร็จในการผลิตไอโซโทป 'เทคนีเชียม-99m' ด้วยเครื่องไซโคลตรอนรุ่นใหม่",
        source: "วารสารนวัตกรรมการแพทย์และรังสี",
        author: "ดร. กิตติศักดิ์ พลศาสตร์ และคณะ",
        publishDate: "20/06/2026",
        lead: "ไทยลดการนำเข้าสารรังสีจากต่างประเทศ หลังสามารถเดินเครื่องเร่งอนุภาคไซโคลตรอนเพื่อผลิตไอโซโทปทางการแพทย์ที่จำเป็นต่อการวินิจฉัยโรคมะเร็งและหัวใจ",
        body: "สถาบันวิจัยนิวเคลียร์เทคโนโลยีรายงานผลการทดสอบการผลิตไอโซโทป Technetium-99m (Tc-99m) ผ่านระบบเป้าหมายที่เป็นผงโมลิบดีนัมบริสุทธิ์ โดยใช้กระบวนการยิงอนุภาคโปรตอนพลังงานสูงจากเครื่องไซโคลตรอน (Cyclotron) ซึ่งเป็นนวัตกรรมที่ลดการพึ่งพาเตาปฏิกรณ์ปรมาณู รายงานระบุว่าสารที่ผลิตได้มีความบริสุทธิ์ทางนิวไคลด์ (Radionuclidic Purity) สูงกว่า 99% ตามมาตรฐานเภสัชตำรับสากล ทั้งนี้คณะวิจัยย้ำเตือนถึงข้อจำกัดสำคัญคือ [[decoy:half-life-logic|ระยะเวลาครึ่งชีวิต (Half-life) ที่สั้นเพียง 6 ชั่วโมง]] ซึ่งทำให้ต้องมีระบบการบริหารจัดการโลจิสติกส์ที่แม่นยำเพื่อส่งมอบให้โรงพยาบาลในรัศมีที่กำหนดเท่านั้น การวิจัยนี้ได้รับการตรวจสอบโดย [[decoy:peer-review|ผู้เชี่ยวชาญอิสระจากทบวงการพลังงานปรมาณูระหว่างประเทศ (IAEA)]] และจะเริ่มนำเข้าสู่กระบวนการใช้งานจริงในไตรมาสหน้าเพื่อลดค่าใช้จ่ายการตรวจ SPECT Scan ให้กับผู้ป่วย",
        hotspots: [
            { 
                id: "half-life-logic", 
                reason: "การระบุข้อจำกัดเรื่องระยะเวลาครึ่งชีวิต (Half-life) เป็นการให้ข้อมูลตามหลักฟิสิกส์ที่ถูกต้อง ซึ่งเป็นอุปสรรคจริงในการกระจายยาจากสารรังสี", 
                isSuspicious: false 
            },
            { 
                id: "peer-review", 
                reason: "การระบุถึงกระบวนการตรวจสอบโดยผู้เชี่ยวชาญอิสระและหน่วยงานสากล (IAEA) เพิ่มน้ำหนักความน่าเชื่อถือทางวิชาการ", 
                isSuspicious: false 
            }
        ],
        explanation: "ข่าวนี้น่าเชื่อถือเนื่องจากระบุเทคโนโลยีการผลิตชัดเจน สอดคล้องกับหลักเภสัชกรรมนิวเคลียร์ และยอมรับข้อจำกัดทางเทคนิคแทนการอ้างสรรพคุณเกินจริง"
    },
    {
        id: "fake-6",
        difficulty: "hard",
        isCredible: false,
        title: "วิกฤตความมั่นคงพลังงาน! พบการแพร่กระจายรังสีไอออนไนซ์จากระบบเสาไฟอัจฉริยะ ทำชาวเมืองล้มป่วยนับแสน",
        source: "Breaking Viral Max",
        author: "ทีมข่าวสืบสวนไวรัล",
        publishDate: "09/09/2026",
        lead: "รายงานลับเผยความผิดปกติของเสาไฟส่องสว่างระบบควอนตัมที่เพิ่งติดตั้งใหม่ พบการแผ่รังสีพลังงานสูงที่ส่งผลโดยตรงต่อระบบประสาทส่วนกลาง",
        body: "เกิดเหตุโกลาหลทั่วพื้นที่เขตเศรษฐกิจใหม่ เมื่อแหล่งข่าววงในเปิดเผยถึงการรั่วไหลของอนุภาคพลังงานสูงที่อ้างว่าเป็น 'รังสีไอออนไนซ์สถานะใหม่' จากระบบเสาไฟถนนอัจฉริยะ (Quantum Smart Pole) ที่ใช้เทคโนโลยีการบีบอัดคลื่นแสงเพื่อประหยัดพลังงาน ส่งผลให้เกิดปรากฏการณ์ประชาชนในรัศมี 5 กิโลเมตรมีอาการวิงเวียนศีรษะ บ้านหมุน และคลื่นไส้อย่างรุนแรง ข้อมูลระบุตัวเลขที่น่าตกใจว่ามี [[spot:huge-number|ผู้ป่วยสะสมกว่า 900,000 คนภายในเวลาเพียง 2 ชั่วโมง]] จนนำไปสู่การสั่งระงับการจ่ายกระแสไฟฟ้าชั่วคราว ข่าวนี้ได้รับการยืนยันเบื้องต้นจาก [[spot:anonymous|อดีตวิศวกรอาวุโสด้านพลังงานนิรนาม]] ที่ระบุว่าระบบกักเก็บพลังงานรังสีสะท้อนมีช่องโหว่ทางเทคนิค นอกจากนี้ยังมีภาพเหตุการณ์ที่อ้างว่าถูกบันทึกไว้ได้ แต่เป็นเพียง [[spot:no-proof-video|คลิปวิดีโอความคมชัดต่ำที่ไม่ปรากฏพิกัดและเวลาที่แน่นอน]] โดยกลุ่มผู้เผยแพร่อ้างว่านี่คือความพยายามของรัฐที่จะปิดปากสื่อ อย่างไรก็ตาม โดยปกติแล้ว [[decoy:proper-tech|หลอด LED ทั่วไปเป็นเทคโนโลยีที่ปลอดภัยและไม่มีการแผ่รังสีไอออนไนซ์]] และการติดตั้งระบบสาธารณะต้องผ่าน [[decoy:safety-protocol|การตรวจสอบมาตรฐานความปลอดภัยทางรังสี (RPE) จากหน่วยงานกำกับดูแล]] ซึ่งข้อมูลในข่าวนี้ยังขาด [[decoy:measured-data|ผลการวัดค่าความเข้มรังสี (Dose Rate) ที่ระบุหน่วยมิลลิซีเวิร์ตชัดเจน]]",
        hotspots: [
            { 
                id: "huge-number", 
                reason: "สถิติผู้ป่วยเกือบล้านคนใน 2 ชั่วโมงขัดกับหลักระบาดวิทยาอย่างรุนแรง แม้จะเป็นเหตุระเบิดนิวเคลียร์ก็ไม่สามารถสร้างผู้ป่วยจำนวนนี้ได้ในทันที", 
                isSuspicious: true 
            },
            { 
                id: "anonymous", 
                reason: "การอ้าง 'อดีตวิศวกรนิรนาม' โดยไม่มีสังกัดที่ตรวจสอบได้ เป็นการหลีกเลี่ยงการพิสูจน์ข้อเท็จจริง", 
                isSuspicious: true 
            },
            { 
                id: "no-proof-video", 
                reason: "การใช้คลิปวิดีโอที่ไม่ระบุพิกัด (Geotag) และเวลา (Timestamp) เป็นลักษณะเด่นของการนำภาพเก่ามาเล่าใหม่เพื่อสร้างความกลัว", 
                isSuspicious: true 
            }
        ],
        explanation: "ข่าวนี้ไม่น่าเชื่อถือเนื่องจากใช้ตัวเลขเกินจริงและอ้างแหล่งข่าวที่ไม่มีตัวตน แม้จะมีการแทรกข้อเท็จจริงเรื่องมาตรฐาน LED มาเป็นตัวหลอก แต่ใจความสำคัญยังเป็นทฤษฎีสมคบคิด"
    }
];

const fakeNewsGame = {
    totalRounds: 6,
    currentRound: 0,
    score: 0,
    answered: false,
    roundSet: [],
    selectedHotspots: new Set(),
    startTime: 0,
    roundStartTime: 0,
    timerInterval: null,
    stats: {
        correctVerdicts: 0,
        foundSuspicious: 0,
        missedSuspicious: 0,
        wrongClicks: 0
    }
};

function initFakeNewsGame() {
    const gameContainer = document.getElementById('fake-news-game-container');
    if (!gameContainer) return;
    showFakeNewsStartScreen();
}

function showFakeNewsStartScreen() {
    const gameContainer = document.getElementById('fake-news-game-container');
    if (!gameContainer) return;

    gameContainer.innerHTML = `
        <div class="text-center py-10">
            <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i class="fas fa-magnifying-glass-chart text-4xl text-white"></i>
            </div>
            <h4 class="text-3xl font-bold text-slate-800 mb-3">Fake News Detector</h4>
            <p class="text-gray-600 mb-2 max-w-3xl mx-auto">อ่านหน้าเว็บข่าวจำลอง แล้วคลิกจุดที่น่าสงสัยก่อนตัดสินว่า <strong>น่าเชื่อถือ</strong> หรือ <strong>ไม่น่าเชื่อถือ</strong></p>
            <p class="text-sm text-emerald-700 font-medium mb-8">6 ด่านแบบสุ่ม | ข่าวจริงและข่าวปลอมปนกัน | มีโบนัสเวลา</p>

            <div class="max-w-2xl mx-auto bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-left mb-8">
                <h5 class="font-bold text-emerald-800 mb-3"><i class="fas fa-list-check mr-2"></i>วิธีเล่น</h5>
                <ul class="space-y-2 text-sm text-slate-700">
                    <li>1) คลิกข้อความที่คิดว่าเป็นหลักฐานน่าสงสัย</li>
                    <li>2) กดปุ่มตัดสินข่าวว่า น่าเชื่อถือ หรือ ไม่น่าเชื่อถือ</li>
                    <li>3) เจอหลักฐานถูกได้คะแนนเพิ่ม คลิกผิดหรือสรุปผิดโดนหักคะแนน</li>
                    <li>4) ตอบเร็วขึ้นได้โบนัสเวลาเพิ่ม</li>
                </ul>
            </div>

            <button onclick="startFakeNewsGame()" class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all">
                <i class="fas fa-play mr-2"></i>เริ่มเกมตรวจข่าว
            </button>
        </div>
    `;
}

function startFakeNewsGame() {
    fakeNewsGame.currentRound = 0;
    fakeNewsGame.score = 0;
    fakeNewsGame.answered = false;
    fakeNewsGame.selectedHotspots = new Set();
    fakeNewsGame.stats = {
        correctVerdicts: 0,
        foundSuspicious: 0,
        missedSuspicious: 0,
        wrongClicks: 0
    };

    const shuffledPool = shuffleArray(fakeNewsPool);
    fakeNewsGame.roundSet = shuffledPool.slice(0, fakeNewsGame.totalRounds);
    fakeNewsGame.startTime = Date.now();
    fakeNewsGame.roundStartTime = Date.now();

    if (fakeNewsGame.timerInterval) {
        clearInterval(fakeNewsGame.timerInterval);
    }
    fakeNewsGame.timerInterval = setInterval(updateFakeNewsTimerUI, 1000);

    renderFakeNewsRound();
}

function updateFakeNewsTimerUI() {
    const timerEl = document.getElementById('fake-news-total-timer');
    if (!timerEl || !fakeNewsGame.startTime) return;
    timerEl.textContent = formatElapsedSeconds(Math.floor((Date.now() - fakeNewsGame.startTime) / 1000));
}

function formatElapsedSeconds(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function renderFakeNewsRound() {
    const gameContainer = document.getElementById('fake-news-game-container');
    if (!gameContainer) return;

    const roundData = fakeNewsGame.roundSet[fakeNewsGame.currentRound];
    if (!roundData) return;

    fakeNewsGame.answered = false;
    fakeNewsGame.selectedHotspots = new Set();
    fakeNewsGame.roundStartTime = Date.now();

    const progress = Math.round(((fakeNewsGame.currentRound + 1) / fakeNewsGame.totalRounds) * 100);
    const bodyHtml = renderFakeNewsBody(roundData.body);
    const suspiciousCount = roundData.hotspots.filter((spot) => spot.isSuspicious).length;

    gameContainer.innerHTML = `
        <div class="max-w-5xl mx-auto">
            <div class="mb-6">
                <div class="flex flex-wrap gap-3 justify-between items-center mb-3">
                    <div class="text-sm font-medium text-slate-600">ด่าน ${fakeNewsGame.currentRound + 1}/${fakeNewsGame.totalRounds}</div>
                    <div class="flex gap-4 text-sm">
                        <span class="font-bold text-emerald-700">คะแนน: ${fakeNewsGame.score}</span>
                        <span class="font-medium text-slate-600">เวลารวม: <span id="fake-news-total-timer">${formatElapsedSeconds(Math.floor((Date.now() - fakeNewsGame.startTime) / 1000))}</span></span>
                    </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500" style="width: ${progress}%"></div>
                </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-md mb-6">
                <div class="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                        <p class="text-xs uppercase tracking-wide text-slate-500">เว็บไซต์ข่าวจำลอง</p>
                        <h5 class="text-2xl font-bold text-slate-900 mt-1">${roundData.title}</h5>
                    </div>
                    <div class="text-right text-sm text-slate-600">
                        <p><i class="fas fa-building mr-1"></i>${roundData.source}</p>
                        <p><i class="fas fa-user mr-1"></i>${roundData.author}</p>
                        <p><i class="fas fa-calendar mr-1"></i>${roundData.publishDate}</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 rounded-xl p-4 mb-4">
                    <p class="text-slate-700 leading-relaxed">${roundData.lead}</p>
                </div>

                <article class="bg-white border border-slate-200 rounded-xl p-5 leading-relaxed text-slate-800">
                    ${bodyHtml}
                </article>

                <div class="mt-4 text-sm text-slate-600 bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <i class="fas fa-hand-pointer mr-1 text-amber-600"></i>
                    คลิกข้อความที่สงสัยได้หลายจุด แล้วค่อยกดตัดสินข่าว
                </div>
            </div>

            <div class="grid md:grid-cols-3 gap-3 mb-4">
                <div class="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                    <p class="text-xs text-green-700">💡 ตัวช่วย</p>
                    <p class="text-sm font-bold text-green-800">${suspiciousCount > 0 ? `มีหลักฐานให้ค้นหา ${suspiciousCount === 1 ? '1 จุด' : suspiciousCount <= 3 ? '2-3 จุด' : 'หลายจุด'}` : 'ข่าวนี้ไม่มีจุดน่าสงสัย'}</p>
                </div>
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                    <p class="text-xs text-blue-700">จุดที่คุณเลือก</p>
                    <p id="selected-count" class="text-2xl font-bold text-blue-800">0</p>
                </div>
                <div class="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
                    <p class="text-xs text-purple-700">เวลาในด่าน</p>
                    <p id="round-timer" class="text-2xl font-bold text-purple-800">00:00</p>
                </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-3">
                <button onclick="submitFakeNewsVerdict(true)" class="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold transition-colors">
                    <i class="fas fa-shield-check mr-2"></i>น่าเชื่อถือ
                </button>
                <button onclick="submitFakeNewsVerdict(false)" class="bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold transition-colors">
                    <i class="fas fa-triangle-exclamation mr-2"></i>ไม่น่าเชื่อถือ
                </button>
            </div>

            <div id="fake-news-feedback" class="hidden mt-5"></div>
        </div>
    `;

    updateRoundTimer();
}

function updateRoundTimer() {
    const timerEl = document.getElementById('round-timer');
    if (!timerEl || fakeNewsGame.answered) return;
    const elapsed = Math.floor((Date.now() - fakeNewsGame.roundStartTime) / 1000);
    timerEl.textContent = formatElapsedSeconds(elapsed);
    requestAnimationFrame(updateRoundTimer);
}

function renderFakeNewsBody(rawText) {
    return rawText.replace(/\[\[(spot|decoy):([a-z0-9-]+)\|([^\]]+)\]\]/gi, (_, _type, id, label) => {
        const uniformStyle = 'border-slate-300 text-slate-700 hover:bg-slate-100';
        return `<button type="button" data-spot-id="${id}" onclick="toggleFakeNewsSpot('${id}')" class="inline-block border-2 border-dashed ${uniformStyle} rounded-md px-1.5 py-0.5 font-semibold transition-colors">${label}</button>`;
    });
}

function toggleFakeNewsSpot(spotId) {
    if (fakeNewsGame.answered) return;

    if (fakeNewsGame.selectedHotspots.has(spotId)) {
        fakeNewsGame.selectedHotspots.delete(spotId);
    } else {
        fakeNewsGame.selectedHotspots.add(spotId);
    }

    const selectedCount = document.getElementById('selected-count');
    if (selectedCount) {
        selectedCount.textContent = fakeNewsGame.selectedHotspots.size;
    }

    const allTargets = document.querySelectorAll(`[data-spot-id="${spotId}"]`);
    allTargets.forEach((target) => {
        target.classList.toggle('ring-2');
        target.classList.toggle('ring-offset-1');
        target.classList.toggle('ring-amber-400');
        target.classList.toggle('bg-amber-100');
    });
}

function submitFakeNewsVerdict(userThinksCredible) {
    if (fakeNewsGame.answered) return;
    fakeNewsGame.answered = true;

    const roundData = fakeNewsGame.roundSet[fakeNewsGame.currentRound];
    const feedbackDiv = document.getElementById('fake-news-feedback');
    if (!roundData || !feedbackDiv) return;

    const hotspotMap = {};
    roundData.hotspots.forEach((spot) => {
        hotspotMap[spot.id] = spot;
    });

    const selected = [...fakeNewsGame.selectedHotspots];
    const suspiciousIds = roundData.hotspots.filter((spot) => spot.isSuspicious).map((spot) => spot.id);
    const decoyIds = roundData.hotspots.filter((spot) => !spot.isSuspicious).map((spot) => spot.id);

    const foundSuspicious = selected.filter((id) => suspiciousIds.includes(id));
    const wrongClicks = selected.filter((id) => decoyIds.includes(id));
    const missedSuspicious = suspiciousIds.filter((id) => !selected.includes(id));

    const verdictCorrect = userThinksCredible === roundData.isCredible;
    const roundSeconds = Math.floor((Date.now() - fakeNewsGame.roundStartTime) / 1000);

    const verdictScore = verdictCorrect ? 120 : -90;
    const foundScore = foundSuspicious.length * 35;
    const missedPenalty = missedSuspicious.length * 15;
    const wrongPenalty = wrongClicks.length * 20;
    const timeBonus = Math.max(0, 45 - (roundSeconds * 2));
    const roundScore = verdictScore + foundScore - missedPenalty - wrongPenalty + timeBonus;

    fakeNewsGame.score += roundScore;
    fakeNewsGame.stats.correctVerdicts += verdictCorrect ? 1 : 0;
    fakeNewsGame.stats.foundSuspicious += foundSuspicious.length;
    fakeNewsGame.stats.missedSuspicious += missedSuspicious.length;
    fakeNewsGame.stats.wrongClicks += wrongClicks.length;

    const verdictText = roundData.isCredible ? "น่าเชื่อถือ" : "ไม่น่าเชื่อถือ";
    const resultClass = verdictCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200";
    const resultTitleClass = verdictCorrect ? "text-green-800" : "text-red-800";

    const detailsRows = [
        `คะแนนตัดสินข่าว: ${verdictScore >= 0 ? '+' : ''}${verdictScore}`,
        `คะแนนจากจุดถูก: +${foundScore}`,
        `หักจากจุดที่พลาด: -${missedPenalty}`,
        `หักจากคลิกผิดจุด: -${wrongPenalty}`,
        `โบนัสเวลา (${formatElapsedSeconds(roundSeconds)}): +${timeBonus}`
    ];

    const missedDetail = missedSuspicious.length
        ? missedSuspicious.map((id) => `<li>• ${hotspotMap[id].reason}</li>`).join('')
        : '<li>• ไม่พลาดจุดน่าสงสัย</li>';

    const wrongDetail = wrongClicks.length
        ? wrongClicks.map((id) => `<li>• ${hotspotMap[id].reason}</li>`).join('')
        : '<li>• ไม่มีการคลิกผิดจุด</li>';

    feedbackDiv.innerHTML = `
        <div class="${resultClass} rounded-xl p-5 border-2">
            <p class="font-bold text-lg ${resultTitleClass} mb-2">
                ${verdictCorrect ? 'ตัดสินถูกต้อง' : 'ตัดสินยังไม่ถูก'}
            </p>
            <p class="text-slate-700 mb-1">คำตอบที่ถูกต้องของข่าวนี้: <strong>${verdictText}</strong></p>
            <p class="text-slate-600 mb-4">${roundData.explanation}</p>

            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="bg-white/80 rounded-lg p-3">
                    <p class="font-semibold text-slate-800 mb-2">สรุปคะแนนด่านนี้</p>
                    <ul class="text-sm text-slate-700 space-y-1">
                        ${detailsRows.map((row) => `<li>• ${row}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-white/80 rounded-lg p-3">
                    <p class="font-semibold text-slate-800 mb-2">สิ่งที่ควรทบทวน</p>
                    <ul class="text-sm text-slate-700 space-y-1">${missedDetail}</ul>
                    <p class="font-semibold text-slate-800 mt-3 mb-2">จุดที่คลิกผิด</p>
                    <ul class="text-sm text-slate-700 space-y-1">${wrongDetail}</ul>
                </div>
            </div>

            <div class="text-right">
                <button onclick="nextFakeNewsRound()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-bold transition-colors">
                    ${fakeNewsGame.currentRound < fakeNewsGame.totalRounds - 1 ? 'ด่านต่อไป' : 'สรุปผลเกม'}
                </button>
            </div>
        </div>
    `;
    feedbackDiv.classList.remove('hidden');

    disableFakeNewsButtons();
}

function disableFakeNewsButtons() {
    const decisionButtons = document.querySelectorAll('#fake-news-game-container button');
    decisionButtons.forEach((btn) => {
        if (btn.innerText.includes('น่าเชื่อถือ') || btn.innerText.includes('ไม่น่าเชื่อถือ')) {
            btn.disabled = true;
            btn.classList.add('opacity-60', 'cursor-not-allowed');
        }
    });
}

function nextFakeNewsRound() {
    fakeNewsGame.currentRound++;
    if (fakeNewsGame.currentRound >= fakeNewsGame.totalRounds) {
        showFakeNewsResults();
    } else {
        renderFakeNewsRound();
    }
}

function showFakeNewsResults() {
    const gameContainer = document.getElementById('fake-news-game-container');
    if (!gameContainer) return;

    if (fakeNewsGame.timerInterval) {
        clearInterval(fakeNewsGame.timerInterval);
        fakeNewsGame.timerInterval = null;
    }

    const totalSeconds = Math.floor((Date.now() - fakeNewsGame.startTime) / 1000);
    const maxSuspicious = fakeNewsGame.roundSet.reduce((sum, round) => {
        return sum + round.hotspots.filter((spot) => spot.isSuspicious).length;
    }, 0);
    const evidenceAccuracy = maxSuspicious === 0
        ? 100
        : Math.round((fakeNewsGame.stats.foundSuspicious / maxSuspicious) * 100);

    gameContainer.innerHTML = `
        <div class="text-center py-10">
            <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <i class="fas fa-award text-5xl text-white"></i>
            </div>
            <h4 class="text-3xl font-bold text-slate-800 mb-2">สรุปผล Fake News Detector</h4>
            <p class="text-slate-600 mb-8">คุณเล่นครบ ${fakeNewsGame.totalRounds} ด่านแล้ว</p>

            <div class="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8">
                <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <p class="text-sm text-emerald-700">คะแนนรวม</p>
                    <p class="text-4xl font-bold text-emerald-800">${fakeNewsGame.score}</p>
                </div>
                <div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p class="text-sm text-blue-700">เวลารวม</p>
                    <p class="text-4xl font-bold text-blue-800">${formatElapsedSeconds(totalSeconds)}</p>
                </div>
                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <p class="text-sm text-purple-700">ตัดสินข่าวถูก</p>
                    <p class="text-4xl font-bold text-purple-800">${fakeNewsGame.stats.correctVerdicts}/${fakeNewsGame.totalRounds}</p>
                </div>
                <div class="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p class="text-sm text-amber-700">ความแม่นยำการหาหลักฐาน</p>
                    <p class="text-4xl font-bold text-amber-800">${evidenceAccuracy}%</p>
                </div>
            </div>

            <div class="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 text-left mb-8">
                <p class="font-semibold text-slate-800 mb-2">ภาพรวมการเล่น</p>
                <ul class="text-sm text-slate-700 space-y-1">
                    <li>• พบหลักฐานน่าสงสัย: ${fakeNewsGame.stats.foundSuspicious} จุด</li>
                    <li>• พลาดหลักฐานน่าสงสัย: ${fakeNewsGame.stats.missedSuspicious} จุด</li>
                    <li>• คลิกผิดจุด: ${fakeNewsGame.stats.wrongClicks} จุด</li>
                </ul>
            </div>

            <div class="flex flex-wrap justify-center gap-3">
                <button onclick="startFakeNewsGame()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
                    <i class="fas fa-rotate-right mr-2"></i>เล่นใหม่
                </button>
                <button onclick="showFakeNewsStartScreen()" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-full font-bold transition-colors">
                    <i class="fas fa-house mr-2"></i>หน้าหลักเกม
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
    initFakeNewsGame();   // เริ่มเกม Fake News Detector
});
