import 'whatwg-fetch';
// import { get } from 'utils/api.js';
import json from 'modules/common/apis/fakeWeather';

export const getWeather = (lat, lon) => {
  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lang=en&lat=${lat}&lon=${lon}`; // eslint-disable-line
  // return get(
  //   url,
  //   null,
  //   {},
  //   {
  //     'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
  //     'x-rapidapi-key': '5cea3bdc9fmsh641ca45ac6c3dfdp18e11cjsn2ee40a5b58bd'
  //   }
  // );
  return new Promise((res) => {
    window.setTimeout(() => res(json), 3000);
  });
};
