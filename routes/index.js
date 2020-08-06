var express = require('express');
var router = express.Router();

let date = {
  time: Date()
}

const users = {
  1: {
    id: '1',
    username: 'Claudia Valdivieso',
  },
  2: {
    id: '2',
    username: 'Carlos Zárate',
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(date));
});

router.post('/usuarios', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(users));
});

module.exports = router;
