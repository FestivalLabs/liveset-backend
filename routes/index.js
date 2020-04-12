var express = require('express');
const multer  = require('multer')
const upload = multer();
const fs = require('fs');
const ms = require('mediaserver');
var router = express.Router();

const UPLOAD_PATH = '/Users/val/liveset-backend/public/uploads/';

router.get('/', function(req, res, next) {
  res.send("Alive");
});

/* GET latest audio file. */
router.get('/audio', function(req, res, next) {
  res.sendFile(UPLOAD_PATH + 'latest.webm');
});

router.post('/audio', upload.single('soundBlob'), function (req, res, next) {
  console.log(req.file)
  fs.writeFileSync(UPLOAD_PATH + 'latest.webm', Buffer.from(new Uint8Array(req.file.buffer)));
  res.sendStatus(200);

})

module.exports = router;
