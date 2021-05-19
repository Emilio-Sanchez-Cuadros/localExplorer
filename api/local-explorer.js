const fs = require('fs');
const express = require("express");
const server = express();
var cors = require('cors');


server.get("/:path", (req, res) => {
  let { path } = req.params
  path = path.replace(/%2F/g,"/");
  path = encodeURI(path);
  path = path.replace(/%20/g, " ");

  if (path.search('Archivos de programa')) {
    path = path.replace('Archivos de programa', 'Program Files')
  } else if (path.search('Usuarios')) {
    path = path.replace('Usuarios', 'Users')
  } else if (path.search('Archivos comunes')) {
    path = path.replace(/Archivos comunes/g, 'Common Files')
  }

  try {
    fs.readdir(`${path}`, function (err, files) {
      if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(files);
    }
  }) 
  } catch {
    res.sendStatus(400);
  }
});


server.listen(3000);
server.use(cors())
