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

module.exports = {
  asyncHandler,
  getDistance,
};