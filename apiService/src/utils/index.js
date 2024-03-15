// simple logger object, could be expanded to create log files in the future
const logger = {
  info(...string) {
    // eslint-disable-next-line no-console
    console.log(new Date().toISOString(), ...string);
  },
  error(...string) {
    // eslint-disable-next-line no-console
    console.error(new Date().toISOString(), ...string);
  },
};

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next))
  .catch(next);

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// based on Haversine Formula found in:
// https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
      + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2))
      * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

/**
 * Nominatim is quite bad with suite/apt numbers so they should be stripped
 * Ideally we would use a more complex solution like 'libpostal' for a real project
 * @param {string} address
 * @returns stripped address
 */
function stripExtraFields(address) {
  const pattern = /\b(?:suite|apartment|unit|apt|ste|#)\s*\w*\b/ig;
  const cleanedAddress = address.replace(pattern, '');
  return cleanedAddress.trim();
}

module.exports = {
  logger,
  normalizePort,
  asyncHandler,
  getDistance,
  stripExtraFields,
};
