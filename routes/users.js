var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController")
const jwt = require("../Middlewares/jwt")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', userController.userSignup)
router.post('/userLogin', userController.userLogin)

module.exports = router;
