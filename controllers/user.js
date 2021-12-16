import * as userModel from "../models/user.js";
import { registerValidate } from "../utils/userValidate.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";

//회원 가입
export async function register(req, res) {
  try {
    const { email, nickname, pw } = req.body;

    registerValidate(req.body, res);

    //email, nick, pw validate 전부 통과하면
    if (await userModel.isExisted(email, nickname)) {
      return res.status(400).json({
        code: 400,
        msg: "이미 존재하는 유저입니다.",
      });
    }

    //비밀번호 해싱
    const hashPw = await bcrypt.hash(pw, 10);

    //유저 생성
    await userModel.createUser(email, hashPw, nickname);

    return res.status(201).json({
      code: 201,
      msg: "회원가입 성공",
    });
  } catch (err) {
    console.error(err);
  }
}

//로그인
export async function login(req, res) {
  try {
    passport.authenticate("local", (error, user, info) => {
      // 유저의 존재여부 확인
      
      if (error || !user) {
        return res.status(400).json({
          code: 400,
          msg: info.msg,
        });
      }
      // 유저가 있는 경우
      req.login(user, { session: false }, (loginError) => {
        if (loginError) {
          return res.send(loginError);
        }
        // 로그인 성공인 경우 ,JWT토큰 생성 및 반환
        const token = jwt.sign(
          {
            id: user._id,
            nickname: user.nickname,
          },
          "instagram"
        );
        return res.status(200).json({
          code: 200,
          msg: "로그인 성공",
          token,
        });
      });
    })(req, res);
  } catch (err) {
    console.error(err);
  }
}
