import passport from "passport";
import jwt from "jsonwebtoken";
import VerifyError from "../classes/index.js";

export const authenticateUser = () => {
  return passport.authenticate("jwt", { session: false });
};

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new VerifyError("유효하지 않은 토큰 입니다.");
    }
    req.user = jwt.verify(token, "instagram");
    return next();
  } catch (err) {
    next(err);
  }
};
