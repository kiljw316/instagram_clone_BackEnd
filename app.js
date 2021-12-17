import express from "express";
import path from "path/posix";
import router from "./routers/index.js";
import passportConfig from "./passport/index.js";
import passport from "passport";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

passportConfig();
app.use(passport.initialize());

app.use("/api", router);
app.use(express.static(path.join(__dirname, "static")));

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  // return res.status(error.status).json({
  //   code: error.status,
  //   msg: error.message,
  // });
  console.log(error)
  res.sendStatus(500);
});

export default app;
