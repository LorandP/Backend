var express = require("express");
var router = express.Router();

/* GET users listing. */
// Using route parameters /:user_id
router.get("/users/:user_id/profile", function (req, res, next) {
  return res.status(400).json({
    title: "Hello world from user!",
  });

  // res.status(200);
  // res.send(req.params);
});

module.exports = router;
