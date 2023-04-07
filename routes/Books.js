var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Books', { title: 'Search Results of Books' });
});

module.exports = router;
