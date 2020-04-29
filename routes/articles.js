var express = require('express');
var router = express.Router();

const seedDB = require('../seeds');
/* display editor . */
router.get('/', function(req, res, next) {
    res.render('articles', {articles: seedDB})
});
  
module.exports = router;