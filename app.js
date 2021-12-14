import express from "express";
import path from "path/posix";
import router from "./routers/index.js";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);
app.use(express.static(path.join(__dirname, "static")));

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

export default app;
