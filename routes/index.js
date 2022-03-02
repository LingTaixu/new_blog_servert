var express = require('express');
var router = express.Router();
const load = require('../utils/index.js');
/* GET home page. */
router.get('/', async function (req, res, next) {
  const data = await load('../../markdown_javacript/content');
  res.send({ code: 1, data });
});

module.exports = router;
