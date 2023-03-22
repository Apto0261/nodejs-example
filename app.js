// const http = require("http");
// const app = http.createServer((req,res) =>{
//     res.writeHead(200,{"Content-Type":"text/html; charset=utf-8" });
//     // console.log(req.url);
//     if (req.url === "/") {
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http 서버");
// });

"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅 
const home = require("./routes/home");

// 앱 세팅 
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/",home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
