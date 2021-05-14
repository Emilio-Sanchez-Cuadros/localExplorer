const fs = require('fs');
const express = require("express");
const server = express();
var router = express.Router();


server.get("/", (req, res) => {
  const { route } = req.params;
  try {
    fs.readdir(`c:/${route}`, function (err, archivos) {
      if (err)
      console.log(err);
    else {
      archivos.forEach(archivos => {
      console.log(archivos);
      })
    }
  }) 
  } catch {
    res.sendStatus(401);
  }
});

// fs.readdir('c:/', function (err, archivos) {
//         if (err)
//         console.log(err);
//       else {
//         archivos.forEach(archivos => {
//         console.log(archivos);
//         })
//       }
//     })
  




server.listen(3000);
