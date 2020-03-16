// Request utils,
// feel free to replace with your code
// (get, post are used in ApiServices)

import 'whatwg-fetch';

/**
 * 1. parse response
 * 2. add "ok" property to result
 * 3. add "status" property to result
 * 3. return request result
 * @param  {Object} res - response from server
 * @return {Object} response result with "ok" property
 */
async function parseResponse(res, parseAsText = false) {
  let data;

  if (parseAsText) {
    try {
      data = await res.text();
    } catch (e) {
      return {
        data: '',
        ok: res.ok,
        status: res.status
      };
    }
  } else {
    try {
      data = await res.json();
    } catch (e) {
      return {
        data: {},
        ok: res.ok,
        status: res.status
      };
    }
  }

  return {
    data,
    ok: res.ok,
    status: res.status
  };
}

const defaultHeaders = {
  'Content-Type': 'application/json; charset=UTF-8'
};

function requestWrapper(method) {
  return async (url, data = null, params = {}, headers = defaultHeaders) => {
    if (method === 'GET') {
      // is it a GET?
      // GET doesn't have data
      params = data; // eslint-disable-line
      data = null; // eslint-disable-line
    } else if (data instanceof FormData) {
      // Let the browser set header for form data
      headers = {};  // eslint-disable-line
    } else if (data === Object(data)) {
      data = JSON.stringify(data); // eslint-disable-line
    } else if (method !== 'POST' || typeof data !== 'string') {
      throw new Error(`XHR invalid, check ${method} on ${url}`);
    }

    const defaults = {
      method,
      headers
    };

    if (data) {
      defaults.body = data;
    }

    const paramsObj = {
      ...defaults,
      headers: { ...params, ...defaults.headers }
    };

    return fetch(url, paramsObj)
      .then(res => parseResponse(res, headers['Content-Type'] === 'text/plain'))
      .catch((err) => {
        console.error(err); // eslint-disable-line
      });
  };
}

export const get = requestWrapper('GET');
export const post = requestWrapper('POST');
export const put = requestWrapper('PUT');
export const patch = requestWrapper('PATCH');
export const del = requestWrapper('DELETE');

// FUNCTION WITH SIDE-EFFECTS
/**
 * `parseResponse()` adds property "ok"
 * that identicates that response is OK
 *
 * `resultOK`removes result.ok from result and returns "ok" property
 *  It widely used in `/actions/*`
 *  for choosing action to dispatch after request to API
 *
 * @param  {Object} result - response result that
 * @return {bool} - indicates was request successful or not
 */
export function resultOK(result) {
  if (result) {
    const { ok } = result;

    delete result.ok; // eslint-disable-line

    return ok; // look at parseResponse
  }

  return false;
}
