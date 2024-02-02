const http = require("http");
const express = require("express");
const app = express();

const servidorHTTP = http.createServer(app);
const io = require("socket.io")(servidorHTTP);

app.use(express.static("public"));

io.addListener("connection", (socket) => {
  console.log("um usuário acabou de conectar");
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
});

servidorHTTP.listen(4040, '192.168.1.4');



//Para inicio tem que instalar os pacotes do nodejs na sequencia abaixo:
//npm init -y
//npm install express
//npm install socket.io

//Para rodar ao servidor, só alterar o IP da linha 17 para o IPV4 do computador e se necessário a porta.

//Após alterar o IPV4, rodar o comando >> node --watch ./server.js OU node ./server.js