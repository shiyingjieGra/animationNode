var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'this is My Express', otherTitle: '另一个标题' });
});

module.exports = router;
