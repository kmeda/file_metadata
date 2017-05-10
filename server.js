var express = require('express');
var multer  = require('multer');
var upload  = multer({ storage: multer.memoryStorage() });


var app = express();
app.use(express.static(__dirname+"/public"));
app.set("view-engine", "html");

app.get('/', (req,res)=>{
  res.render("index");
});

app.post('/profile', upload.single('file'), function (req, res) {
  console.log(req.file);
  if (req.file) {
    res.send({size: req.file.size});
  } else {
    res.send({error: "File not uploaded."});
  }
});

app.listen(3000);
