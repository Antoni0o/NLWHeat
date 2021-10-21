import "dotenv/config";
import cors from "cors";
import http from "http";
import express from 'express';
import { Server } from "socket.io";

import { router } from "./routes";

const app = express();
app.use(cors());
const serverHttp = http.createServer(app);


const io = new Server(serverHttp, {
  cors: {
    origin: "*"
  }
});
io.on("connection", (socket) => {
  console.log(`Usuário conectado! ${socket.id}`);
})


app.use(express.json())
app.use(router)


app.get("/github", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});
app.get("/signin/callback", (req, res) => {
  const { code } = req.query;

  return res.json(code);
});


export { serverHttp, io }


