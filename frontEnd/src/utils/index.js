export function kmToMiles(km) {
    return km * 0.621371;
}

export function roundToTwoDecimals(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}