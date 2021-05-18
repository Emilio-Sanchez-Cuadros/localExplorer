const fs = require('fs');
const express = require("express");
// const { json } = require('body-parser');
const server = express();
var cors = require('cors')
// var router = express.Router();


server.get("/:path", (req, res) => {
  let { path } = req.params
  path = path.replace(/%2F/g,"/");
  path = encodeURI(path);
  path = path.replace(/%20/g, " ");
  console.log(path);

  if (path.search('Archivos de programa')) {
    path = path.replace('Archivos de programa', 'Program Files')
  } else if (path.search('Usuarios')) {
    path = path.replace('Usuarios', 'Users')
  } else if (path.search('Archivos comunes')) {
    path = path.replace('Archivos comunes', 'Common Files')
  }

  try {
    fs.readdir(`${path}`, function (err, files) {
      if (err)
      console.log(err);
    else {
      res.send(files);
      // res.json({files});      
      console.log(files);
    }
  }) 
  } catch {
    res.sendStatus(400);
  }
});




server.listen(3000);
server.use(cors())
