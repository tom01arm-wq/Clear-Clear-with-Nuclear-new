// === Fake News Detector Game ===
// ระบบเกมตรวจจับข่าวปลอม 6 ด่าน (สุ่มลำดับ)

// ข้อมูลข่าว 6 ด่าน (ผสมจริง/ปลอม)
var fakeNewsPool = [
    {
        id: "fn1",
        isFake: true,
        title: 'วงการวิทย์ตะลึง! เปิดตัว "กำไลแม่เหล็ก" นวัตกรรมกันรังสีตลอดชีวิต ไม่ต้องพบแพทย์อีกต่อไป',
        source: "[super-protection-now.net] - 19 มกราคม 2026",
        author: "รายงานโดย: ฝ่ายวิจัยผลิตภัณฑ์",
        content: '<p class="mb-4">กลายเป็นที่ฮือฮาในกลุ่มผู้รักสุขภาพและผู้อยู่ใกล้ชิดแหล่งกำเนิดรังสี เมื่อมีการประกาศความสำเร็จของผลิตภัณฑ์ใหม่ "กำไลแม่เหล็กป้องกันรังสี" ซึ่งอ้างว่าเป็นทางออกสุดท้ายในการปกป้องร่างกายจากภัยเงียบรอบตัว โดยสามารถป้องกันรังสีได้ทุกชนิดแบบถาวรและครอบคลุมตลอดช่วงชีวิต</p>'
            + '<h4 class="font-bold mt-4 mb-2">รายละเอียดข้อกล่าวอ้างและสรรพคุณ</h4>'
            + '<ul class="list-disc pl-5 mb-4 space-y-2">'
            + '<li>การป้องกันระดับสมบูรณ์: โฆษณาว่ากำไลนี้สามารถทำหน้าที่แทนการตรวจสุขภาพทางรังสีได้ทั้งหมด ผู้ใช้งาน "ไม่จำเป็นต้องพบแพทย์หรือตรวจวัดปริมาณรังสีในร่างกายอีกต่อไป"</li>'
            + '<li><span class="fn-suspect" data-spot="1">การรับประกันสุดโต่ง: เพื่อสร้างความมั่นใจ ทางเว็บไซต์ประกาศ "คืนเงิน 500% หากผู้ใช้ยังได้รับรังสี" แม้จะไม่มีการระบุวิธีตรวจวัดผลลัพธ์ที่เป็นรูปธรรมแก่ผู้ซื้อ</span></li>'
            + '<li><span class="fn-suspect" data-spot="2">งานวิจัยที่ไม่มีแหล่งที่มา: มีการใช้คำว่า "อ้างอิงงานวิจัยนานาชาติ" อย่างแพร่หลายทั่วหน้าเว็บ แต่กลับ "ไม่ให้ลิงก์ข้อมูลต้นทาง" ไม่ระบุชื่อผู้วิจัย หรือชื่อวารสารทางวิทยาศาสตร์ที่ตีพิมพ์แต่อย่างใด</span></li>'
            + '<li><span class="fn-decoy" data-decoy="1">รีวิวเชิงบวกแบบไร้ที่มา: มีการลงข้อความยืนยันจากผู้ใช้ที่ระบุว่า "ทุกคนพอใจ 100%" โดยภาพประกอบและชื่อผู้ใช้งานไม่มีตัวตนจริง</span></li>'
            + '</ul>',
        explanation: '<p class="mb-2"><strong>สาเหตุที่เป็นข่าวปลอม:</strong></p>'
            + '<ul class="list-disc pl-5 text-sm">'
            + '<li><strong>กำไลแม่เหล็กกันรังสีเป็นไปไม่ได้:</strong> สนามแม่เหล็กขนาดเล็กไม่สามารถเบี่ยงเบนหรือป้องกันรังสีพลังงานสูงได้</li>'
            + '<li><strong>การใช้คำรับประกันเกินจริง:</strong> "คืนเงิน 500%" เป็นเทคนิคจิตวิทยาเพื่อสร้างความเชื่อมั่นปลอม</li>'
            + '<li><strong>อ้างงานวิจัยลอย:</strong> ข่าวที่น่าเชื่อถือต้องระบุชื่อนักวิจัย สถาบัน หรือแหล่งอ้างอิงที่ตรวจสอบย้อนกลับได้</li>'
            + '</ul>'
    },
    {
        id: "fn2",
        isFake: false,
        title: 'กรมวิทยาศาสตร์การแพทย์เผยผลตรวจ "รังสีในอาหารนำเข้า" ไตรมาส 1/2026 พบผ่านเกณฑ์มาตรฐานสากล',
        source: "[กรมวิทยาศาสตร์การแพทย์] - 10 มีนาคม 2026",
        author: "รายงานโดย: กองรังสีและเครื่องมือแพทย์",
        content: '<p class="mb-4">กรมวิทยาศาสตร์การแพทย์ โดยกองรังสีและเครื่องมือแพทย์ เผยแพร่รายงานสรุปผลการเฝ้าระวังความปลอดภัยด้านรังสีในอาหารนำเข้าประจำไตรมาสที่ 1 (มกราคม-มีนาคม 2026)</p>'
            + '<h4 class="font-bold mt-4 mb-2">สรุปผลการตรวจสอบทางห้องปฏิบัติการ</h4>'
            + '<ul class="list-disc pl-5 mb-4 space-y-2">'
            + '<li><span class="fn-decoy" data-decoy="1">มาตรฐานความปลอดภัย: ผลการตรวจวัดพบว่า ค่ารังสีในทุกตัวอย่าง "อยู่ต่ำกว่าเกณฑ์สูงสุดที่กำหนด" โดยมาตรฐานอาหารสากล (Codex Alimentarius)</span></li>'
            + '<li><span class="fn-decoy" data-decoy="2">เทคโนโลยีการตรวจวัด: ห้องปฏิบัติการใช้เครื่อง Gamma Spectrometry ที่มีความละเอียดสูง</span></li>'
            + '<li>การรับรองคุณภาพ: กระบวนการตรวจวิเคราะห์ทั้งหมดดำเนินการภายใต้ระบบมาตรฐาน ISO/IEC 17025</li>'
            + '</ul>'
            + '<p>ความโปร่งใสและข้อจำกัดของข้อมูล: กรมได้เปิดเผยตารางข้อมูลดิบ (Raw Data) และระบุข้อจำกัดในการดำเนินงานอย่างตรงไปตรงมา</p>',
        explanation: '<p class="mb-2"><strong>สาเหตุที่เป็นข่าวจริง:</strong></p>'
            + '<ul class="list-disc pl-5 text-sm">'
            + '<li><strong>ระบุหน่วยงานชัดเจน:</strong> มีการระบุที่มาคือ กองรังสีและเครื่องมือแพทย์ กรมวิทยาศาสตร์การแพทย์</li>'
            + '<li><strong>อ้างอิงวิธีมาตรฐานทางวิทยาศาสตร์:</strong> มีการระบุเทคนิคที่ใช้ (Gamma Spectrometry) และมาตรฐานสากล (ISO/IEC 17025)</li>'
            + '<li><strong>ไม่มีการใช้ถ้อยคำที่สร้างความแพนิก:</strong> ใช้ภาษาที่เป็นเหตุเป็นผลและยอมรับข้อจำกัด</li>'
            + '</ul>'
    },
    {
        id: "fn3",
        isFake: true,
        title: 'ทีมข่าวสุขภาพเร่งด่วน: เผยสูตรลับ "หยดไอโอดีน" อ้างป้องกันรังสีเต็มรูปแบบ 100%',
        source: "[Nuclear-Health-Flash.blog] - 12 พฤศจิกายน 2777",
        author: "รายงานโดย: แอดมิน",
        content: '<p class="mb-4 text-red-600 font-bold border-b border-red-200 pb-2">อัปเดต: วันที่โพสต์ข่าว <span class="fn-suspect font-black" data-spot="1">12 พฤศจิกายน 2777</span></p>'
            + '<p class="mb-4">กลายเป็นกระแสวิพากษ์วิจารณ์อย่างหนักบนโลกออนไลน์ เมื่อมีการแชร์ต่อข้อมูลจากแหล่งข่าวไม่ระบุที่มา อ้างถึงวิธีการรับมือกับภาวะวิกฤตรังสีด้วยวิธีที่ทำได้เองที่บ้าน โดยระบุว่าการ "ดื่มน้ำผสมไอโอดีนเพียงหนึ่งหยด" สามารถสร้างเกราะป้องกันรังสีให้ร่างกายได้ 100%</p>'
            + '<h4 class="font-bold mt-4 mb-2">รายละเอียดคำกล่าวอ้าง</h4>'
            + '<ul class="list-disc pl-5 mb-4 space-y-2">'
            + '<li><span class="fn-decoy" data-decoy="1">ประสิทธิภาพเบ็ดเสร็จ: อ้างว่าสูตรนี้สามารถป้องกันรังสีได้ทันทีและสมบูรณ์แบบ โดยที่ผู้รับสาร "ไม่จำเป็นต้องไปพบแพทย์"</span></li>'
            + '<li><span class="fn-suspect" data-spot="2">กลุ่มตัวอย่างขนาดเล็ก: มีการอ้างผลการทดลองในประชากรเพียง 5 คน ซึ่งบทความสรุปว่าได้ผลลัพธ์คงที่ 100%</span></li>'
            + '<li><span class="fn-suspect" data-spot="3">องค์กรลับรับรอง: ยืนยันว่าวิธีการนี้ได้รับการรับรองจาก "องค์กรวิจัยลับระดับโลก" ซึ่งไม่มีการเปิดเผยชื่ออย่างเป็นทางการ</span></li>'
            + '</ul>',
        explanation: '<p class="mb-2"><strong>สาเหตุที่เป็นข่าวปลอม:</strong></p>'
            + '<ul class="list-disc pl-5 text-sm">'
            + '<li><strong>วันที่โพสต์ผิดปกติ:</strong> มีการระบุปีที่โพสต์เป็นปี พ.ศ. 2777 (ในอนาคตที่ยังมาไม่ถึง)</li>'
            + '<li><strong>กลุ่มตัวอย่างไม่น่าเชื่อถือ:</strong> สรุปผลทางการแพทย์โดยอ้างประชากรทดลองเพียง 5 คน</li>'
            + '<li><strong>แหล่งอ้างอิงไร้ตัวตน:</strong> การอ้าง "องค์กรวิจัยลับระดับโลก" เป็นพฤติกรรมของข่าวลวง</li>'
            + '<li>ไอโอดีนช่วยปกป้องต่อมไทรอยด์ได้ แต่<strong>ไม่สามารถกันรังสีได้ 100%</strong> ในทุกอวัยวะ</li>'
            + '</ul>'
    },
    {
        id: "fn4",
        isFake: true,
        title: 'ระทึก! ชาวเมืองผวา โรงไฟฟ้าใหม่ปล่อยควันกัมมันตรังสี ทำพืชเปลี่ยนสี-ป่วยพุ่งเฉียดแสน',
        source: "[ข่าวจริงทันใจ 24x7] - 3 สิงหาคม 2026",
        author: "รายงานโดย: นักข่าวอิสระ (ไม่เปิดเผยชื่อ)",
        content: '<p class="mb-4">เกิดกระแสความหวาดกลัวอย่างรุนแรงในพื้นที่รอบโรงไฟฟ้าพลังงานนิวเคลียร์แห่งใหม่ หลังจากมีรายงานแพร่สะพัดว่าส่งผลกระทบต่อระบบนิเวศและสุขภาพของประชาชน</p>'
            + '<h4 class="font-bold mt-4 mb-2">คำกล่าวอ้างจากแหล่งข่าว</h4>'
            + '<ul class="list-disc pl-5 mb-4 space-y-2">'
            + '<li><span class="fn-decoy" data-decoy="1">ควันสีขาวคือภัยเงียบ: แหล่งข่าวอ้างว่าควันสีขาวที่พวยพุ่งออกมาจากปล่องระบายนั้นคือ "รังสีบริสุทธิ์" ที่มีความเข้มข้นสูง</span></li>'
            + '<li><span class="fn-decoy" data-decoy="2">ปล่อยมลพิษไร้การควบคุม: มีการระบุว่าโรงไฟฟ้า "ปล่อยควันกัมมันตรังสีทุกวัน" โดยไม่มีระบบกรองอากาศ</span></li>'
            + '<li><span class="fn-suspect" data-spot="1">วิกฤตสาธารณสุข: อ้างว่าพบประชาชนล้มป่วย 70,000 คนภายในวันเดียว แต่กลับไม่มีการระบุชื่อโรงพยาบาลหรือบันทึกการรับผู้ป่วยแม้แต่แห่งเดียว</span></li>'
            + '<li><span class="fn-suspect" data-spot="2">หลักฐานพยาน: อ้างอิง "พยานนิรนาม" พร้อมแนบภาพประกอบที่นำมาจากเหตุการณ์ภัยพิบัติเมื่อ 20 ปีก่อน</span></li>'
            + '</ul>',
        explanation: '<p class="mb-2"><strong>สาเหตุที่เป็นข่าวปลอม:</strong></p>'
            + '<ul class="list-disc pl-5 text-sm">'
            + '<li><strong>ความเข้าใจผิดเรื่องควัน:</strong> ควันสีขาวจากโรงไฟฟ้าคือ "ไอน้ำ" (Water Vapor) จากระบบหล่อเย็น ไม่ใช่รังสี</li>'
            + '<li><strong>สถิติการป่วยเกินจริง:</strong> 70,000 คนล้มป่วยในวันเดียวโดยไม่มีประกาศภาวะฉุกเฉิน เป็นการปลอมแปลงสถิติ</li>'
            + '<li><strong>อ้างพยานนิรนามและภาพเก่า:</strong> เป็นเครื่องมือคลาสสิกของข่าวบิดเบือน (Disinformation)</li>'
            + '</ul>'
    },
    {
        id: "fn5",
        isFake: false,
        title: 'รพ.จังหวัด ยกระดับแม่นยำ! เปิดบริการเครื่อง SPECT/CT ตรวจวินิจฉัยโรคต่อมไทรอยด์ด้วยเทคโนโลยีชั้นสูง',
        source: "[ศูนย์ข่าวโรงพยาบาลรัฐ] - 21 กุมภาพันธ์ 2026",
        author: "รายงานโดย: กองสื่อสารองค์กร",
        content: '<p class="mb-4">โรงพยาบาลจังหวัดประกาศยกระดับศักยภาพทางการแพทย์ครั้งสำคัญ ด้วยการเปิดให้บริการ SPECT/CT เทคโนโลยีถ่ายภาพทางการแพทย์ที่ทันสมัยที่สุดสำหรับผู้ป่วยโรคต่อมไทรอยด์</p>'
            + '<h4 class="font-bold mt-4 mb-2">มาตรฐานความปลอดภัยภายใต้รังสีปริมาณต่ำ</h4>'
            + '<ul class="list-disc pl-5 mb-4 space-y-2">'
            + '<li><span class="fn-decoy" data-decoy="1">ปริมาณรังสีที่เหมาะสม: การตรวจวินิจฉัยด้วย SPECT/CT เป็นการใช้สารกัมมันตรังสีในปริมาณต่ำมาก (Low-dose)</span></li>'
            + '<li><span class="fn-decoy" data-decoy="2">มาตรฐานเวชปฏิบัติ: ดำเนินการตามแนวทาง Clinical Practice Guidelines ที่ได้รับการรับรองระดับสากล</span></li>'
            + '<li>ความโปร่งใส: โรงพยาบาลมีเอกสารรับรองความปลอดภัยและขั้นตอนปฏิบัติที่ชัดเจน ตรวจสอบได้ทุกขั้นตอน</li>'
            + '</ul>',
        explanation: '<p class="mb-2"><strong>สาเหตุที่เป็นข่าวจริง:</strong></p>'
            + '<ul class="list-disc pl-5 text-sm">'
            + '<li><strong>เป็นข้อมูลจริงและโปร่งใส:</strong> อธิบายเรื่องการใช้ "รังสี" ในทางการแพทย์อย่างมีเหตุผล ว่ามีปริมาณต่ำ (Low-dose)</li>'
            + '<li><strong>ระบุแหล่งข่าวชัดเจน:</strong> เผยแพร่โดยกองสื่อสารองค์กร โรงพยาบาลรัฐ มีเอกสารอ้างอิงเวชปฏิบัติ</li>'
            + '</ul>'
    },
    {
        id: "fn6",
        isFake: true,
        title: 'ช็อกวงการ! องค์กรลับเผย "นิวเคลียร์" ทำ DNA กลายพันธุ์ถาวรใน 1 ชม. แชร์ด่วนก่อนถูกลบ!',
        source: "[World Underground Science Network] - 1 มกราคม 2088",
        author: "รายงานโดย: ทีมวิจัยอิสระ (ไม่เปิดเผยตัวตน)",
        content: '<p class="mb-4 text-red-600 font-bold border-b border-red-200 pb-2">อัปเดต: วันที่โพสต์ข่าว <span class="fn-suspect font-black" data-spot="1">1 มกราคม 2088</span></p>'
            + '<p class="mb-4">กลายเป็นประเด็นที่สร้างความตื่นตระหนกไปทั่วโลกออนไลน์ เมื่อมีการเผยแพร่รายงานจากกลุ่มที่เรียกตัวเองว่า "เครือข่ายวิทยาศาสตร์ใต้ดินระดับโลก (WUSN)" โดยอ้างว่าค้นพบหลักฐานลับสุดยอด</p>'
            + '<h4 class="font-bold mt-4 mb-2">รายละเอียดคำกล่าวอ้าง</h4>'
            + '<ul class="list-disc pl-5 mb-4 space-y-2">'
            + '<li><span class="fn-decoy" data-decoy="1">กลายพันธุ์ถาวรใน 1 ชั่วโมง: รายงานอ้างว่ารังสีจากโรงไฟฟ้านิวเคลียร์สามารถเปลี่ยนแปลง DNA ของมนุษย์ให้กลายพันธุ์อย่างถาวรได้ภายใน 60 นาที</span></li>'
            + '<li><span class="fn-suspect" data-spot="2">ผลการทดลองลับ: มีการระบุว่าผลสรุปนี้มาจากกลุ่มตัวอย่างเพียง 3 คน ภายในห้องทดลองเป็นเวลา 45 นาที ก่อนจะสรุปว่าเกิดกับมนุษย์ทุกคนบนโลก</span></li>'
            + '<li><span class="fn-suspect" data-spot="3">รายงานระบุองค์กร: ข่าวนี้อ้างข้อมูลวงในจากกลุ่มที่ไม่ปรากฏในทะเบียนหน่วยงานระดับสากล ไม่มีรายงานสนับสนุนจาก WHO หรือ IAEA</span></li>'
            + '</ul>',
        explanation: '<p class="mb-2"><strong>สาเหตุที่เป็นข่าวปลอม:</strong></p>'
            + '<ul class="list-disc pl-5 text-sm">'
            + '<li><strong>วันที่โพสต์เป็นปีในอนาคต:</strong> ระบุเป็นปี ค.ศ. 2088</li>'
            + '<li><strong>กลุ่มตัวอย่างแค่ 3 คน:</strong> สรุปผลลัพธ์ที่จะเกิดกับมนุษยชาติทุกคนจากคนแค่ 3 คน ไร้ความน่าเชื่อถือ</li>'
            + '<li><strong>กระตุ้นอารมณ์ให้แชร์เร่งด่วน:</strong> "แชร์ด่วนก่อนถูกลบ" เป็น Signature ชัดเจนของ Fake News</li>'
            + '</ul>'
    }
];

// ตัวแปร Game State
var fnCurrentLevelIndex = 0;
var fnUserScore = 0;
var fnCurrentNews = null;
var fnFoundSpots = [];
var fnTotalSpots = 0;
var fnTimerInterval = null;
var fnTimeSeconds = 0;
var fnGameLevels = [];
var fnClickedDecoys = [];

// สุ่มลำดับ Array
function fnShuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

// อัปเดตหน้าจอเวลา
function fnUpdateTimer() {
    var el = document.getElementById('fn-timer');
    if (!el) return;
    var mins = Math.floor(fnTimeSeconds / 60);
    var secs = fnTimeSeconds % 60;
    el.textContent = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
}

// เริ่มจับเวลา
function fnStartTimer() {
    fnTimeSeconds = 0;
    fnUpdateTimer();
    clearInterval(fnTimerInterval);
    fnTimerInterval = setInterval(function() {
        fnTimeSeconds++;
        fnUpdateTimer();
    }, 1000);
}

// หยุดจับเวลา
function fnStopTimer() {
    clearInterval(fnTimerInterval);
}

// เริ่มเกม (ฟังก์ชัน global สำหรับ onclick)
function fnStartGame() {
    fnGameLevels = fnShuffleArray(fakeNewsPool);
    fnCurrentLevelIndex = 0;
    fnUserScore = 0;

    var scoreEl = document.getElementById('fn-score');
    if (scoreEl) scoreEl.textContent = 'คะแนน: 0';

    var introEl = document.getElementById('fn-intro-state');
    var playEl = document.getElementById('fn-playing-state');
    if (introEl) introEl.classList.add('hidden');
    if (playEl) playEl.classList.remove('hidden');

    fnLoadLevel();
}

// โหลดด่าน
function fnLoadLevel() {
    fnCurrentNews = fnGameLevels[fnCurrentLevelIndex];
    fnFoundSpots = [];
    fnClickedDecoys = [];

    // แสดงด่าน
    var levelEl = document.getElementById('fn-level');
    if (levelEl) levelEl.textContent = 'ด่าน: ' + (fnCurrentLevelIndex + 1) + ' / ' + fnGameLevels.length;

    // นับจำนวนจุดน่าสงสัยจริง
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = fnCurrentNews.content;
    var suspectNodes = tempDiv.querySelectorAll('.fn-suspect');
    fnTotalSpots = suspectNodes.length;

    var foundEl = document.getElementById('fn-found-spots');
    var totalEl = document.getElementById('fn-total-spots');
    if (foundEl) foundEl.textContent = '0';
    if (totalEl) totalEl.textContent = fnTotalSpots > 0 ? '?' : '0';

    // สร้างเนื้อหาข่าว
    var contentHtml = '<h2 class="text-2xl font-black mb-1 leading-snug">' + fnCurrentNews.title + '</h2>'
        + '<div class="text-xs text-slate-500 mb-6 pb-2 border-b flex flex-wrap gap-4">'
        + '<span>' + fnCurrentNews.source + '</span>'
        + '<span>' + fnCurrentNews.author + '</span>'
        + '</div>'
        + '<div class="prose prose-slate max-w-none">' + fnCurrentNews.content + '</div>';

    var contentEl = document.getElementById('fn-news-content');
    if (contentEl) contentEl.innerHTML = contentHtml;

    // ทำให้จุดน่าสงสัย (suspect) คลิกได้
    var suspects = contentEl.querySelectorAll('.fn-suspect');
    for (var i = 0; i < suspects.length; i++) {
        (function(span) {
            span.style.cursor = 'pointer';
            span.style.borderRadius = '4px';
            span.style.padding = '2px 4px';
            span.style.transition = 'background-color 0.2s';
            span.addEventListener('mouseenter', function() {
                if (!this.dataset.found) this.style.backgroundColor = 'rgba(254, 240, 138, 0.5)';
            });
            span.addEventListener('mouseleave', function() {
                if (!this.dataset.found) this.style.backgroundColor = '';
            });
            span.addEventListener('click', function() {
                if (this.dataset.found) return;
                this.dataset.found = 'true';
                this.style.backgroundColor = '#fecaca';
                this.style.color = '#991b1b';
                this.style.fontWeight = '600';
                var spotId = this.getAttribute('data-spot');
                if (fnFoundSpots.indexOf(spotId) === -1) {
                    fnFoundSpots.push(spotId);
                    var fEl = document.getElementById('fn-found-spots');
                    if (fEl) fEl.textContent = fnFoundSpots.length;
                }
            });
        })(suspects[i]);
    }

    // ทำให้จุดหลอกล่อ (decoy) คลิกได้เช่นกัน
    var decoys = contentEl.querySelectorAll('.fn-decoy');
    for (var d = 0; d < decoys.length; d++) {
        (function(span) {
            span.style.cursor = 'pointer';
            span.style.borderRadius = '4px';
            span.style.padding = '2px 4px';
            span.style.transition = 'background-color 0.2s';
            span.addEventListener('mouseenter', function() {
                if (!this.dataset.clicked) this.style.backgroundColor = 'rgba(254, 240, 138, 0.5)';
            });
            span.addEventListener('mouseleave', function() {
                if (!this.dataset.clicked) this.style.backgroundColor = '';
            });
            span.addEventListener('click', function() {
                if (this.dataset.clicked) return;
                this.dataset.clicked = 'true';
                this.style.backgroundColor = '#fed7aa';
                this.style.color = '#9a3412';
                var decoyId = this.getAttribute('data-decoy');
                if (fnClickedDecoys.indexOf(decoyId) === -1) {
                    fnClickedDecoys.push(decoyId);
                }
            });
        })(decoys[d]);
    }

    fnStartTimer();
}

// ส่งคำตอบ
function fnSubmitAnswer(trustedChosen) {
    fnStopTimer();

    var isCorrectDecision = false;
    var title = '';
    var desc = '';
    var iconClass = '';
    var iconColor = '';
    var pointsEarned = 0;
    var isActuallyFake = fnCurrentNews.isFake;

    if (!isActuallyFake) {
        // ข่าวจริง
        if (trustedChosen) {
            isCorrectDecision = true;
            pointsEarned = 100;
            title = 'วิเคราะห์ถูกต้องแม่นยำ!';
            desc = 'ข่าวนี้เป็นข่าวจริงและสามารถเชื่อถือได้ ยอดเยี่ยมมาก!';
            iconClass = 'fa-check-circle';
            iconColor = 'text-emerald-500';
        } else {
            isCorrectDecision = false;
            pointsEarned = -50;
            title = 'วิเคราะห์คลาดเคลื่อน';
            desc = 'ข่าวนี้เป็นข่าวจริงและเชื่อถือได้! การระแวงมากเกินไปอาจทำให้พลาดข้อมูลสำคัญ';
            iconClass = 'fa-exclamation-triangle';
            iconColor = 'text-amber-500';
        }
        // หักคะแนน ถ้าคลิก decoy ผิดในข่าวจริง
        if (fnClickedDecoys.length > 0) {
            pointsEarned -= fnClickedDecoys.length * 10;
        }
    } else {
        // ข่าวปลอม
        if (!trustedChosen) {
            isCorrectDecision = true;
            pointsEarned = 50;
            pointsEarned += fnFoundSpots.length * 30;

            if (fnFoundSpots.length < fnTotalSpots) {
                desc = 'คุณระบุว่าข่าวนี้ปลอมได้ถูกต้อง! แต่ค้นหาจุดน่าสงสัยได้ ' + fnFoundSpots.length + '/' + fnTotalSpots + ' จุด';
                iconClass = 'fa-check-circle';
                iconColor = 'text-emerald-500';
                title = 'จับผิดได้สำเร็จ!';
            } else {
                desc = 'สมบูรณ์แบบ! คุณชี้จุดที่น่าสงสัยของข่าวนี้ได้อย่างครบถ้วนและถูกต้อง';
                iconClass = 'fa-shield-alt';
                iconColor = 'text-blue-500';
                title = 'นักสืบข่าวกรองตัวจริง!';
                pointsEarned += 50;
            }
        } else {
            isCorrectDecision = false;
            pointsEarned = -100;
            title = 'ระวัง! คุณโดนหลอกแล้ว';
            desc = 'ข่าวฉบับนี้มีข้อพิรุธและข้อมูลเท็จแฝงอยู่ ไม่สามารถเชื่อถือได้!';
            iconClass = 'fa-times-circle';
            iconColor = 'text-rose-500';
        }
    }

    // โบนัสเวลา (เฉพาะตอบถูก)
    if (isCorrectDecision) {
        if (fnTimeSeconds <= 15) pointsEarned += 50;
        else if (fnTimeSeconds <= 30) pointsEarned += 20;
    }

    fnUserScore += pointsEarned;
    if (fnUserScore < 0) fnUserScore = 0;

    var scoreEl = document.getElementById('fn-score');
    if (scoreEl) scoreEl.textContent = 'คะแนน: ' + fnUserScore;

    // แสดง result overlay
    var iconEl = document.getElementById('fn-result-icon');
    if (iconEl) iconEl.innerHTML = '<i class="fas ' + iconClass + ' ' + iconColor + '" style="font-size:4rem;"></i>';

    var titleEl = document.getElementById('fn-result-title');
    if (titleEl) {
        titleEl.textContent = title;
        titleEl.className = 'text-3xl font-bold mb-2 ' + (isCorrectDecision ? 'text-emerald-600' : 'text-rose-600');
    }

    var scoreSign = pointsEarned >= 0 ? '+' : '';
    var scoreColor = pointsEarned >= 0 ? 'text-green-600' : 'text-red-500';
    var descEl = document.getElementById('fn-result-desc');
    if (descEl) descEl.innerHTML = desc + ' <span class="' + scoreColor + ' font-bold mx-2">' + scoreSign + pointsEarned + ' คะแนน</span>';

    var explEl = document.getElementById('fn-result-explanation');
    if (explEl) explEl.innerHTML = fnCurrentNews.explanation;

    var nextBtn = document.getElementById('fn-next-btn');
    if (nextBtn) {
        if (fnCurrentLevelIndex === fnGameLevels.length - 1) {
            nextBtn.innerHTML = 'ดูสรุปผลคะแนน <i class="fas fa-flag-checkered ml-2"></i>';
            nextBtn.className = 'bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors w-full';
        } else {
            nextBtn.innerHTML = 'ด่านต่อไป <i class="fas fa-arrow-right ml-2"></i>';
            nextBtn.className = 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors w-full';
        }
    }

    var overlayEl = document.getElementById('fn-result-overlay');
    var cardEl = document.getElementById('fn-result-card');
    if (overlayEl) overlayEl.classList.remove('hidden');
    setTimeout(function() {
        if (cardEl) {
            cardEl.style.transform = 'scale(1)';
            cardEl.style.opacity = '1';
        }
    }, 10);
}

// ด่านต่อไป
function fnNextLevel() {
    var cardEl = document.getElementById('fn-result-card');
    if (cardEl) {
        cardEl.style.transform = 'scale(0.95)';
        cardEl.style.opacity = '0.5';
    }

    setTimeout(function() {
        var overlayEl = document.getElementById('fn-result-overlay');
        if (overlayEl) overlayEl.classList.add('hidden');

        fnCurrentLevelIndex++;
        if (fnCurrentLevelIndex < fnGameLevels.length) {
            fnLoadLevel();
        } else {
            fnShowEndSummary();
        }
    }, 200);
}

// สรุปผลเกม
function fnShowEndSummary() {
    var playEl = document.getElementById('fn-playing-state');
    var introEl = document.getElementById('fn-intro-state');
    if (playEl) playEl.classList.add('hidden');
    if (introEl) introEl.classList.remove('hidden');

    var rank, rankDesc, rankColor, rankIcon;

    if (fnUserScore > 800) {
        rankIcon = 'fa-crown text-yellow-500';
        rank = 'ปรมาจารย์นักสืบไซเบอร์';
        rankDesc = 'สายตาเฉียบแหลม! คุณไม่มีทางตกเป็นเหยื่อข่าวลวงได้อย่างแน่นอน';
        rankColor = 'text-yellow-600';
    } else if (fnUserScore > 500) {
        rankIcon = 'fa-medal text-blue-500';
        rank = 'พลเมืองรู้เท่าทันสื่อ';
        rankDesc = 'เก่งมาก! คุณมีภูมิคุ้มกันข่าวปลอมที่ดีเยี่ยม';
        rankColor = 'text-blue-600';
    } else if (fnUserScore > 200) {
        rankIcon = 'fa-search text-indigo-500';
        rank = 'ผู้เริ่มต้นหัดเช็กข่าว';
        rankDesc = 'ยังต้องระวังให้มากขึ้น! ข่าวปลอมบางแนบเนียนจนคุณอาจเผลอเชื่อได้';
        rankColor = 'text-indigo-600';
    } else {
        rankIcon = 'fa-radiation-alt text-red-500';
        rank = 'เป้าหมายหลักของข่าวลวง!';
        rankDesc = 'อันตรายมาก! คุณเชื่อข้อมูลที่ผิดปกติได้ง่ายเกินไป ควรอ่านวิเคราะห์ก่อนเชื่อเสมอนะ';
        rankColor = 'text-red-600';
    }

    if (introEl) {
        introEl.innerHTML = '<i class="fas ' + rankIcon + ' text-7xl mb-6 drop-shadow-lg animate-bounce"></i>'
            + '<h3 class="text-3xl font-extrabold text-slate-800 mb-2">บทสรุปภารกิจตรวจสอบ</h3>'
            + '<p class="text-xl text-slate-600 mb-8">คุณทำคะแนนรวมได้: <span class="text-5xl font-black ' + rankColor + ' block mt-4">' + fnUserScore + '</span></p>'
            + '<div class="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mb-8 border border-slate-200">'
            + '<h4 class="font-bold text-lg mb-2 border-b pb-2">ผลประเมินของคุณคือ: <span class="' + rankColor + '">' + rank + '</span></h4>'
            + '<p class="text-slate-600">' + rankDesc + '</p>'
            + '</div>'
            + '<button onclick="location.reload()" class="bg-gradient-to-r from-slate-600 to-slate-800 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all mr-4">'
            + '<i class="fas fa-home mr-2"></i> กลับหน้าหลัก</button>'
            + '<button onclick="fnStartGame()" class="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all">'
            + '<i class="fas fa-redo mr-2"></i> เล่นใหม่อีกครั้ง</button>';
    }
}
