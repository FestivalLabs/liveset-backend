var express = require('express');
const multer  = require('multer')
const upload = multer();
const fs = require('fs');
const ms = require('mediaserver');
var router = express.Router();

const UPLOAD_PATH = '/Users/val/liveset-backend/public/uploads/';


router.get('/', function(req, res, next) {
  fs.readdir(UPLOAD_PATH, function(error, files) {  
    var totalFiles = files.length - 1; // return the number of files
    res.send({name: totalFiles + ".webm"})
  });
});

/* GET latest audio file. */
router.get('/audio', function(req, res, next) {
  res.sendFile(UPLOAD_PATH + 'latest.webm');
});

router.post('/audio', upload.single('soundBlob'), function (req, res, next) {
  fs.readdir(UPLOAD_PATH, function(error, files) {  
    var totalFiles = files.length; // return the number of files
    const filename = totalFiles + ".webm";
    fs.writeFileSync(UPLOAD_PATH + filename, Buffer.from(new Uint8Array(req.file.buffer)));
    res.sendStatus(200);
  });

})

module.exports = router;
