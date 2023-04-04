const express = require("express");
const app = express();

const cors = require("cors");
const morgan = require("morgan");
const port = 3001;

// TODO: cors를 적용합니다.
app.use(cors());
// TODO: Express 내장 미들웨어인 express.json()을 적용합니다.
app.use(express.json());
// OPTIONAL: HTTP 요청 logger인 morgan을 적용합니다.
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

const discussionsRouter = require("./router/discussions");

// TODO: /discussions 경로로 라우팅합니다.
app.use("/discussions", discussionsRouter);

app.get("/", (req, res) => {
  res.status(200).send("Welcome, My Agora States Server!");
});

const server = app.listen(port, () => {
  console.log(`[RUN] My Agora States Server... | localhost:${port}`);
});

module.exports.app = app;
module.exports.server = server;
