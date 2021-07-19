var express = require('express');
var router = express.Router();

/* GET users listing. */
// Using route parameters /:user_id
router.get('/:user_id/profile', function(req, res, next) {
  res.status(200);
  res.send(req.params);
});

module.exports = router;
