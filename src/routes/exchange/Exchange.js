import { mock } from '../../mockResponse';
import { getURLParams } from '../../shared/getURLParams';
import {
  SUPPORTED_PARAMS,
  NAME,
  URL,
  YEAR_ESTABLISHED,
  COUNTRY,
  DESCRIPTION,
  IMG,
  HAS_TRADING_INCENTIVE,
  TRADE_VOLUME_24H_BTC,
  TRADE_VOLUME_24H_BTC_NORMALIZED,
  TRUST_SCORE,
  TRUST_SCORE_RANK,
} from './constants';

import './Exchange.css';

export const getExchangeParamsFromURL = () => {
  const allParams = getURLParams();
  const exchange = {};
  for (const supportedParam of SUPPORTED_PARAMS) {
    if (allParams.has(supportedParam))
      exchange[supportedParam] = allParams.get(supportedParam);
  }
  return exchange;
};

export const formatTradeVolume = (volumeNormalised, volume) => {
  if (volumeNormalised) return volumeNormalised;
  if (volume) return volume;
  return 'Unknown';
};

const sanitizeParams = (key, value) => {
  switch (key) {
    case NAME:
      if (!value) return '-';
      break;
    case YEAR_ESTABLISHED:
      if (!value) return 'Unknown';
      break;
    case COUNTRY:
      if (!value) return 'Unknown';
      break;
    case DESCRIPTION:
      if (!value) return '';
      break;
    case HAS_TRADING_INCENTIVE:
      if (!value) return 'No';
      break;
    // TODO: Research if user could provide malicious url being used for img src attribute
    case IMG:
      if (!value) return '';
      break;
    case URL:
      if (!value) return '';
      break;
    case TRADE_VOLUME_24H_BTC:
      if (!value) return '';
      break;
    case TRUST_SCORE:
      if (!value) return '-';
      break;
    case TRUST_SCORE_RANK:
      if (!value) return '-';
      break;
    case TRADE_VOLUME_24H_BTC_NORMALIZED:
      if (!value) return '';
      break;
    default:
      return value;
  }
  return value;
};

// should I return {name: ''} even if there is no key? Would be good for destructuring
// could use supported_params for that
// could early on check if getExchangeParamsFrmURL returns any keys and if not show some error
// that way user would've been informed that something went wrong

export const Exchange = () => {
  return (
    <div className="wrapper">
      <div>Name</div>
      <div>Binance</div>
      <div>Year Established</div>
      <div>2017</div>
    </div>
  );
};
