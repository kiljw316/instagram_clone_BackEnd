import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";
import bcrypt from "bcrypt";
import * as userModel from "../models/user.js";

const passportconfig = { usernameField: "email", passwordField: "pw" };
const passportVerify = async (email, pw, done) => {
  try {
    const user = await userModel.findByOne(email);
    // 이메일이 일치하는 유저가 없는 경우
    if (!user) {
      return done(null, false, { msg: "존재하지 않는 사용자 입니다." });
    }

    // 이메일이 일치하는 유저가 있는 경우, 결과 값은 Boolean
    const compareResult = await bcrypt.compare(pw, user.pw);
    // compareResult가 true일 경우
    if (compareResult) {
      return done(null, user);
    }
    // 비밀번호가 일치하지 않는 경우?
    done(null, false, { msg: "올바르지 않은 비밀번호 입니다." });
  } catch (error) {
    done(error);
  }
};

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: "instagram",
};

const JWTVerify = async (jwtPayload, done) => {
  try {
    // payload안에 id와 nickname 으로 유저 조회
    const user = await userModel.findById(jwtPayload._id);
    // 일치하는 유저가 있는 경우
    if (user) {
      return done(null, user);
    }
    // 일치하는 유저가 없는 경우
    done(null, false, { msg: "올바르지 않은 인증정보 입니다." });
  } catch (err) {
    console.log(err);
    done(err);
  }
};

function passportConfig() {
  passport.use("local", new LocalStrategy(passportconfig, passportVerify));
  passport.use("jwt", new JWTStrategy(JWTConfig, JWTVerify));
}

export default passportConfig;

