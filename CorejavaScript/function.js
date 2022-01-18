/*
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) 외부 변수를 수정함

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // 함수 호출 전이므로 John 이 출력됨

showMessage();

alert( userName ); // 함수에 의해 Bob 으로 값이 바뀜
*/

function pow(x, n){
    let result = x;
    for(let i=1; i< n; i++){
        result *= x;
    }
    return result;
}

alert(pow(3,2));
//pow(3,3);
//pow(1, 100);


/*
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`${n}은 양의 정수이어야 합니다.`);
  } else {
    alert( pow(x, n) );
  }
  */