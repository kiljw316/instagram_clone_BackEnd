const emailRegEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const nicknameRegEx = /^[가-힣ㄱ-ㅎa-zA-Z0-9._ -]{2,10}$/;
const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@!%*#?&]{8,20}$/;

const emailValidate = (email) => {
    return emailRegEx.test(email);
}

const nicknameValidate = (nickname) => {
    return nicknameRegEx.test(nickname);
}

const passwordValidate = (pw) => {
    return passwordRegEx.test(pw);
}

export const registerValidate = (userInfo => {
    const {email, nickname, pw } = userInfo;
    if (!emailValidate(email)) {
        throw new Error("이메일 형식과 맞지 않습니다.");
      }
    
      if (!nicknameValidate(nickname)) {
        throw new Error("닉네임 형식과 맞지 않습니다.");
      }
    
      if (!passwordValidate(pw)) {
        throw new Error("패스워드 형식과 맞지 않습니다.");
      }
})

