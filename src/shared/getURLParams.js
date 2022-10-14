// var sanitizeUrl = require("@braintree/sanitize-url").sanitizeUrl;
import { sanitizeUrl } from '@braintree/sanitize-url';

export const getURLParams = (param) => {
  // I'm not sure if URLSearchParams does sanitization or not, but
  // just to be safe(r) decided to add sanitize
  const url = sanitizeUrl(window.location.search);
  return new URLSearchParams(url);
};
