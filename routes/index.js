var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var cookie = req.cookies;
  if(cookie.nick !== undefined) {
    var content = "Usuario:" + cookie.nick;
    res.render("index", { Mensaje: content});
  } else {
    res.render("index", { Mensaje: "BIENVENIDO A LA AGENDA"});
  }
});


router.get('/cookies', function(req, res, next) {
  res.status(300).send(req.cookies);
});



router.get('/autenticar', function(req, res, next) {
  res.render("autenticar");
});


router.get('/registrar', function(req, res, next) {
  res.render("registrar");
});


module.exports = router;
