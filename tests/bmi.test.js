const { calculateBMI, getBMICategory } = require('../src/utils/bmi');

// --- ทดสอบการคำนวณตัวเลข BMI ---
test('calculateBMI: น้ำหนัก 70kg ส่วนสูง 175cm ต้องได้ BMI ประมาณ 22.86', () => {
    expect(calculateBMI(70, 175)).toBe(22.86);
});

test('calculateBMI: น้ำหนัก 50kg ส่วนสูง 160cm ต้องได้ BMI ประมาณ 19.53', () => {
    expect(calculateBMI(50, 160)).toBe(19.53);
});

test('calculateBMI: ใส่ค่าไม่ครบหรือใส่เลข 0 ต้องได้ 0', () => {
    expect(calculateBMI(0, 160)).toBe(0);
});

// --- ทดสอบเกณฑ์การแปลผลสุขภาพ ---
test('getBMICategory: BMI 17.5 ต้องได้ ผอม', () => {
    expect(getBMICategory(17.5)).toBe('น้ำหนักน้อย / ผอม');
});

test('getBMICategory: BMI 22.0 ต้องได้ ปกติ', () => {
    expect(getBMICategory(22.0)).toBe('ปกติ / สุขภาพดี');
});

test('getBMICategory: BMI 24.5 ต้องได้ ท้วม', () => {
    expect(getBMICategory(24.5)).toBe('ท้วม / โรคอ้วนระดับ 1');
});

test('getBMICategory: BMI 28.0 ต้องได้ อ้วน', () => {
    expect(getBMICategory(28.0)).toBe('อ้วน / โรคอ้วนระดับ 2');
});

test('getBMICategory: BMI 32.0 ต้องได้ อ้วนมาก', () => {
    expect(getBMICategory(32.0)).toBe('อ้วนมาก / โรคอ้วนระดับ 3');
});

test('getBMICategory: ค่า BMI ติดลบหรือเป็น 0 ต้องขึ้น ข้อมูลไม่ถูกต้อง', () => {
    expect(getBMICategory(0)).toBe('ข้อมูลไม่ถูกต้อง');
});