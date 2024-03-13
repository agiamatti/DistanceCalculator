const express = require('express');
const { asyncHandler } = require('../utils');
const { postDistanceHandler } = require('../handlers/distance');

const router = express.Router();

router.post('/distance', asyncHandler(postDistanceHandler));
router.post('/history', asyncHandler(postDistanceHandler));

module.exports = router;
