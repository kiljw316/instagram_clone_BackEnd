import User from "../schemas/user.js";

//회원 정보(id)
export async function findById(id) {
  try {
    return await User.findById({_id: id}, {pw: false});
  } catch (err) {
    console.error(err);
  }
}

//회원 정보(email)
export async function findByOne(email) {
  try {
    return await User.findOne({ email });
  } catch (err) {
    console.error(err);
  }
}

//회원 중복 확인
export async function isExisted(email, nickname) {
  try {
    const exEmail = await User.findOne({ email });
    const exNickname = await User.findOne({ nickname });
    if (exEmail || exNickname) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
  }
}

//회원 가입
export async function createUser(email, pw, nickname) {
  try {
    return await User.create({
      email,
      pw,
      nickname,
    });
  } catch (err) {
    console.error(err);
  }
}
