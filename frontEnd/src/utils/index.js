/**
 *
 * @param {number} km
 * @returns number miles
 */
export function kmToMiles(km) {
  return km * 0.621371;
}

/**
 *
 * @param {number} num
 * @returns number rounded to 2 decimals
 */
export function roundToTwoDecimals(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Get existing data from a localStorage storage key or create the key if it doesn't exist
 * @param {any} newData
 * @param {string} storageKey
 */
export function storeResultsInLocalStorage(newData, storageKey) {
  const existingData = JSON.parse(localStorage.getItem(storageKey)) || [];
  // newest data is inserted first
  const updatedData = [newData, ...existingData];
  localStorage.setItem(storageKey, JSON.stringify(updatedData));
}

/**
 * Delete an item from local storage
 * @param {string} storageKey
 */
export function deleteLocalStorageItem(storageKey) {
  localStorage.removeItem(storageKey);
}

/**
 * Obtain an item from local storage
 * @param {string} storageKey
 * @returns
 */
export function getLocalStorageItem(storageKey) {
  return JSON.parse(localStorage.getItem(storageKey));
}
