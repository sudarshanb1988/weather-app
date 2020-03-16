import 'whatwg-fetch';
import { get } from 'utils/api.js';

export const logout = () => get(
  '/authenticate/logout',
  null,
  {},
  {
    'Content-Type': 'text/plain'
  }
);
