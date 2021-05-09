var express = require('express');
var router = express.Router();

/* GET layout listing. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'this is My Express', otherTitle: '另一个标题' });
})

router.post('/getLayout', function (req, res, next) {
  res.send({title: '23562'})
})

module.exports = router;