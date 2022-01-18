let admin = prompt('아이디를 입력하세요 ');

if(admin == "Admin"){
    let pw = prompt('비밀번호를 입력해주세요');
    if(pw == "TheMaster"){
        alert('환영합니다.!');
        alert("취소되었습니다.");
    }else{
        alert('인증에 실패하였습니다.')
    }
}else if(admin == " " || admin == null){
    alert('취소되었습니다.');
}else{
    alert('인증에 실패하였습니다.');
}
