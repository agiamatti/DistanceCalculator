const { getLocationFromNominatim } = require('../external/nominatim');
const { logger, getDistance } = require('../utils');

const postDistanceHandler = async (req, res) => {
  const { source, destination } = req.body;

  try {
    const src = await getLocationFromNominatim(source);
    const dest = await getLocationFromNominatim(destination);
    logger.info(src, dest);
    const distance = getDistance(src.lat, src.lon, dest.lat, dest.lon);
    if (distance === 0) {
      res.status(400).json({
        error:
         `Both source and destination resolved to the same address: ${src.display_name}`,
      });
    } else {
      res.json({
        resolvedSource: src.display_name,
        resolvedDestination: dest.display_name,
        distance,
      });
    }
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  postDistanceHandler,
};
