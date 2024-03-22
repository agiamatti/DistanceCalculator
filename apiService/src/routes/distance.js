const express = require('express');
const { asyncHandler } = require('../utils');
const { validateDistanceRequest } = require('../validators/distance');
const { postDistanceHandler } = require('../handlers/distance');
const { version } = require('../../package.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(`Distance API Service v${version}`);
});
router.post('/distance', validateDistanceRequest, asyncHandler(postDistanceHandler));

module.exports = router;
