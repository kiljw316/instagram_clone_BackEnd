import { connect } from "./schemas/index.js";
import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

connect();
server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
