/*
let firstName = null;
let lastnNme = null;
let nickName = null;

alert(firstName ?? lastnNme ?? nickName ?? "익명의 연산자");
*/

/*
let height = 0;

alert(height || 100);
alert(height ?? 100);
*/

let height = null;
let width = null;

let area = (height ?? 300) * (width ?? 50);

alert(area);