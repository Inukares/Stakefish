import {
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

export const sanitizeParams = (key, value) => {
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
      if (!value) return '-';
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
