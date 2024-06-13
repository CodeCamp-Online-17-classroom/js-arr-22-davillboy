// write code here
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

function makeWorker() {
  let name = 'Pete';
  return function () {
    alert(name);
  };
}
let name = 'John';
let work = makeWorker();
work(); // *

ผลลัพธ์
Pete  
work ที่ถูกเรียกใช้งานหลังจาก makeWorker ถูกเรียกใช้ ซึ่งในฟังก์ชัน work มีการใช้ตัวแปร name
ซึ่งถ้าไม่ได้ระบุค่าใหม่ภายใน work จะใช้ค่า name จากส่วนของ makeWorker ที่ถูกคืนค่าออกไป
ซึ่ง makeWorker ได้ทำการ alert name ที่มีค่าเป็น "Pete" ที่เก็บไว้แล้ว จึงทำให้ผลลัพธ์ที่ alert ออกมาคือ "Pete"
