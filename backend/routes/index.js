var express = require('express');
var router = express.Router();
var users = require('../lib/users');
var activeUsers = require('../lib/activeUsers');

var active = activeUsers(users)

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.json(users)
  res.render('index', { title: 'Express' });
});

router.get('/active_users', function(req, res, next) {
  res.json(active)
  res.render('index', { title: 'Express' });
});

module.exports = router;
