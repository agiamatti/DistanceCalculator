const { getLocationFromNominatim } = require('../external/nominatim');
const { getDistance } = require('../utils');

const postDistanceHandler = async (req, res) => {
  const { source, destination } = req.body;

  try {
    const src = await getLocationFromNominatim(source);
    const dest = await getLocationFromNominatim(destination);
    console.log(src, dest);
    res.json(getDistance(src.lat, src.lon, dest.lat, dest.lon));
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

module.exports = {
  postDistanceHandler,
};
