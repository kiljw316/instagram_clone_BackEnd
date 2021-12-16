const emailRegEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const nicknameRegEx = /^[가-힣ㄱ-ㅎa-zA-Z0-9._ -]{2,}$/;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

const emailValidate = (email) => {
    return emailRegEx.test(email);
}

const nicknameValidate = (nickname) => {
    return nicknameRegEx.test(nickname);
}

const passwordValidate = (pw) => {
    return passwordRegEx.test(pw);
}

export const registerValidate = ((userInfo, res) => {
    const {email, nickname, pw } = userInfo;
    if (!emailValidate(email)) {
        return res.status(400).json({
          code: 400,
          msg: "이메일 형식과 맞지 않습니다.",
        });
      }
    
      if (!nicknameValidate(nickname)) {
        return res.status(400).json({
          code: 400,
          msg: "닉네임 형식과 맞지 않습니다.",
        });
      }
    
      if (!passwordValidate(pw)) {
        return res.status(400).json({
          code: 400,
          msg: "비밀번호 형식과 맞지 않습니다.",
        });
      }
})

