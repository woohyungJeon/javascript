//3. Unknown Parameters

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('HI');

//4. Rest parameters
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
}
printAll('draem', 'coding', 'ellie')


//5.Local scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();
//console.log(message);


//6. return Value
function sum(a, b){
    return a+b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1, 2)}`);

//7. Early Return, early exit 케이스를 두개로 나눠서 리턴을 빨리 받는것
//bad
function upgraderUser(user){
    if(user.point > 10){

    }
}

//good
function upgraderUser(user){
    if(user.point <= 10){
        
    }
}

//1.funtion expression
const print = function(){
    console.log('print');
};