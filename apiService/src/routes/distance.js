const express = require('express');
const { asyncHandler } = require('../utils');
const { postDistanceHandler } = require('../handlers/distance');
const { version } = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Distance API Service v${version}`);
});
router.post('/distance', asyncHandler(postDistanceHandler));

module.exports = router;
