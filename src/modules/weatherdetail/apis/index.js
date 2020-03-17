import 'whatwg-fetch';
import { get } from 'utils/api.js';
import {
  RAPID_API_HOST,
  RAPID_API_KEY
} from 'utils/constants.js';
// import json from 'modules/common/apis/fakeWeather';

export const getWeather = (lat, lon) => {
  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lang=en&lat=${lat}&lon=${lon}`; // eslint-disable-line
  return get(
    url,
    null,
    {},
    {
      'x-rapidapi-host': RAPID_API_HOST,
      'x-rapidapi-key': RAPID_API_KEY
    }
  );
  // return new Promise((res) => {
  //   window.setTimeout(() => res(json), 3000);
  // });
};
