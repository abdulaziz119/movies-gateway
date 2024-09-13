export function setHeaders(headers) {
  return {
    Authorization: headers['authorization'],
    'Accept-Language': headers['accept-language'],
  };
}
