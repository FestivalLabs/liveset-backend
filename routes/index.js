var express = require('express');
var router = express.Router();

/* GET latest audio file. */
router.get('/', function(req, res, next) {
  res.status(200).send("Here is your audio file");
});

router.post('/', function(req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
