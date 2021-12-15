import * as userModel from "../models/user.js";
import bcrypt from "bcrypt";

const emailRegEx = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const nickanmeRegEx = /^[가-힣ㄱ-ㅎa-zA-Z0-9._ -]{2,}$/;
const pwRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

//회원 가입
export async function register(req, res) {
  try {
    const { email, nickname, pw } = req.body;
    if (!emailRegEx.test(email)) {
      return res.status(400).json({
        code: 400,
        msg: "이메일 형식과 맞지 않습니다.",
      });
    }

    if (!nickanmeRegEx.test(nickname)) {
      return res.status(400).json({
        code: 400,
        msg: "닉네임 형식과 맞지 않습니다.",
      });
    }

    if (!pwRegEx.test(pw)) {
      return res.status(400).json({
        code: 400,
        msg: "비밀번호 형식과 맞지 않습니다.",
      });
    }

    if (await userModel.isExisted(email, nickname)) {
      return res.status(400).json({
        code: 400,
        msg: "이미 존재하는 유저입니다.",
      });
    }

    const hashPw = await bcrypt.hash(pw, 10);
    await userModel.createUser(email, hashPw, nickname);
    return res.status(201).json({
      code: 201,
      msg: "회원가입 성공",
    });
  } catch (err) {
    console.error(err);
  }
}
