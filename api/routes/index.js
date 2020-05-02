var express = require('express');
var router = express.Router();
const articles = require('../seeds')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'EnterNodeJS', articles });
});

module.exports = router;
