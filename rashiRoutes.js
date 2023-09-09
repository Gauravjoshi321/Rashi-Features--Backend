const express = require('express');
const { getAllRashis, getRashiById } = require('./rashiController');

const router = express.Router();

router.get('/', getAllRashis);
router.get('/:Id', getRashiById);

module.exports = router;