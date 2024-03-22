const { logger, stripExtraFields } = require('../utils');

const getLocationFromNominatim = async (q) => {
  const format = 'json';
  const limit = 1;

  const curedQuery = stripExtraFields(q);
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${
      encodeURIComponent(curedQuery)}&format=${format}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data[0]?.place_id) {
      throw new Error(`No results found for address: ${q}`);
    }
    // data returns an array, we only need the 0th item
    return data[0];
  } catch (error) {
    logger.error('Error querying Nominatim API:', error);
    throw new Error(`Failed to query Nominatim API with query ${q}, error: ${error}`);
  }
};

module.exports = {
  getLocationFromNominatim,
};
