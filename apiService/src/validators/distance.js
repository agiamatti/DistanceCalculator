/* eslint-disable consistent-return */

const validateDistanceRequest = (req, res, next) => {
  const { source, destination } = req.body;

  if (!source || !destination) {
    return res.status(400).json({ error: 'Source and destination are required.' });
  }

  next();
};

module.exports = { validateDistanceRequest };
