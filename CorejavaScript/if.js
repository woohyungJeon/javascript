'use strict'

/*
let q = prompt("what's the \"official\" name of javascript");

if(q == "ECMAScript"){
    alert(`정답이니다.`);
}else{
    alert(`you don't know`);
}
*/

/*
조건부 연산자 '?'를 이용해 if문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

let result;

if (a + b < 4) {
  result = '미만';
} else {
  result = '이상';
}*/

//답
//let result = (a + b <4 )? '미만' : '이상';

/*조건부 연산자 '?'를 사용해 if..else문이 사용된 아래 코드를 변형해보세요. 동작 결과는 동일해야 합니다.

가독성을 위해 표현식을 여러 줄로 분할해 작성해 보시길 바랍니다.

let message;

if (login == '직원') {
  message = '안녕하세요.';
} else if (login == '임원') {
  message = '환영합니다.';
} else if (login == '') {
  message = '로그인이 필요합니다.';
} else {
  message = '';
}*/

let message = (login == "직원") ? '안녕하세요' : (login == '임원') ? '환영합니다.' : (login == '') ? '로그인이 필요합니다.' : '';