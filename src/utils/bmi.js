// ฟังก์ชันคำนวณค่า BMI
function calculateBMI(weight, heightCm) {
    if (!weight || !heightCm || heightCm <= 0) return 0;
    const heightM = heightCm / 100; // แปลงเซนติเมตรเป็นเมตร
    const bmi = weight / (heightM * heightM);
    return Math.round(bmi * 100) / 100; // ปัดเศษทศนิยม 2 ตำแหน่ง
}

// ฟังก์ชันแปลผลเกณฑ์ BMI
function getBMICategory(bmi) {
    if (bmi <= 0) return 'ข้อมูลไม่ถูกต้อง';
    if (bmi < 18.5) return 'น้ำหนักน้อย / ผอม';
    if (bmi < 23.0) return 'ปกติ / สุขภาพดี';
    if (bmi < 25.0) return 'ท้วม / โรคอ้วนระดับ 1';
    if (bmi < 30.0) return 'อ้วน / โรคอ้วนระดับ 2';
    return 'อ้วนมาก / โรคอ้วนระดับ 3';
}

module.exports = { calculateBMI, getBMICategory };