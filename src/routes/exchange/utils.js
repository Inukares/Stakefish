import { getURLParams } from '../../shared/getURLParams';
import { sanitizeParams } from '../../shared/sanitizeParams';

import {
  COUNTRY,
  DESCRIPTION,
  HAS_TRADING_INCENTIVE,
  IMG,
  NAME,
  TRADE_VOLUME_24H_BTC,
  TRADE_VOLUME_24H_BTC_NORMALIZED,
  TRUST_SCORE,
  TRUST_SCORE_RANK,
  URL,
  YEAR_ESTABLISHED,
} from '../../shared/constants';

export const SUPPORTED_PARAMS = [
  NAME,
  YEAR_ESTABLISHED,
  COUNTRY,
  DESCRIPTION,
  HAS_TRADING_INCENTIVE,
  IMG,
  TRADE_VOLUME_24H_BTC,
  TRADE_VOLUME_24H_BTC_NORMALIZED,
  TRUST_SCORE,
  TRUST_SCORE_RANK,
  URL,
];

export const getExchangeFromURL = () => {
  const allParams = getURLParams();
  const exchange = {};
  for (const supportedParam of SUPPORTED_PARAMS) {
    if (allParams.has(supportedParam))
      exchange[supportedParam] = allParams.get(supportedParam);
  }
  return exchange;
};

export const getSanitizedExchange = () => {
  const exchange = getExchangeFromURL();
  const sanitizedExchange = {};
  let param;
  for (let i = 0; i < SUPPORTED_PARAMS.length; i++) {
    param = SUPPORTED_PARAMS[i];
    sanitizedExchange[param] = sanitizeParams(param, exchange[param]);
  }
  return sanitizedExchange;
};
