export function fetchRegions() {
    return fetch(`https://wines-api.herokuapp.com/api/regions`).then(r => r.json());
}
export function fetchWinesFrom(region) {
    return fetch(`https://wines-api.herokuapp.com/api/wines?region=${region}`).then(r => r.json());
}
export function fetchWine(id) {
    return fetch(`https://wines-api.herokuapp.com/api/wines/${id}`).then(r => r.json());
}