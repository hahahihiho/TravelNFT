import mapbox from 'mapbox-gl';
import Key from '../../lib/api_keys.js'

// https://docs.mapbox.com/help/glossary/access-token/
mapbox.accessToken = Key.mapbox_apikey;

const key = {};

export { mapbox, key };