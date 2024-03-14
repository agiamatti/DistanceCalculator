const { getLocationFromNominatim } = require('../external/nominatim');
const { logger, getDistance, stripExtraFields } = require('../utils');

const postDistanceHandler = async (req, res) => {
  const { source, destination } = req.body;

  try {
    const src = await getLocationFromNominatim(stripExtraFields(source));
    const dest = await getLocationFromNominatim(stripExtraFields(destination));
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
