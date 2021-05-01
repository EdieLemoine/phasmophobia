import Cookies from 'js-cookie';

/**
 * @param {String} name
 */
export function getCookie(name) {
  const cookie = Cookies.get(name);

  if (cookie) {
    return JSON.parse(cookie);
  }

  return cookie;
}
