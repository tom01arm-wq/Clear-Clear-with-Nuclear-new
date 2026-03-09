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

// ฟังก์ชันตั้งค่าอะตอมแบบโต้ตอบในส่วนพื้นฐานนิวเคลียร์
function setupInteractiveAtom() {
    const atom = document.getElementById('interactive-atom');    // หาคอนเทนเนอร์อะตอม
    const nucleus = document.getElementById('atom-nucleus');    // หานิวเคลียส

    // ตรวจสอบว่ามีอิลิเมนต์ที่ต้องการหรือไม่
    if (!atom || !nucleus) {
        return;
    }

    // ฟังก์ชันสำหรับทำให้นิวเคลียส pulse กระพริบ
    const pulseNucleus = () => {
        nucleus.classList.remove('pulse');   // เอาคลาส pulse ออกก่อน
        void nucleus.offsetWidth;             // บังคับ reflow เพื่อรีเซ็ตแอนิเมชัน
        nucleus.classList.add('pulse');      // เพิ่มคลาส pulse เพื่อเริ่มแอนิเมชันใหม่
    };

    // เพิ่ม event listener สำหรับคลิกเมาส์
    atom.addEventListener('click', pulseNucleus);

    // เพิ่ม event listener สำหรับการควบคุมด้วยคีย์บอร์ด (accessibility)
    atom.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();  // ป้องกันการ scroll เมื่อกด spacebar
            pulseNucleus();          // ทำให้นิวเคลียส pulse
        }
    });

    // เพิ่ม event listener สำหรับเอฟเฟกต์ 3D เมื่อเลื่อนเมาส์
    atom.addEventListener('mousemove', (event) => {
        const rect = atom.getBoundingClientRect();  // หาตำแหน่งและขนาดของอะตอม
        // คำนวณระยะห่างจากจุดศูนย์กลาง
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);

        // คำนวณองศาการหมุน (สูงสุด ±5 องศา)
        const rotateY = (offsetX / (rect.width / 2)) * 5;
        const rotateX = -(offsetY / (rect.height / 2)) * 5;

        // ใช้ CSS transform เพื่อสร้างเอฟเฟกต์ 3D
        atom.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // เพิ่ม event listener สำหรับรีเซ็ตตำแหน่งเมื่อเมาส์ออกจากพื้นที่
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
    }, 900);  // หน่วงเวลา 900 มิลลิวินาที
}

// กำหนด event listener สำหรับเริ่มทำงานเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();           // เริ่มแบบทดสอบ
    setupInteractiveAtom(); // ตั้งค่าอะตอมแบบโต้ตอบ
});
