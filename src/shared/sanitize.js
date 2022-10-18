const DEFAULTS = {
  name: '-',
  year_established: 'Unknown',
  country: 'Unknown',
  description: '-',
  has_trading_incentive: 'No',
  image: '-',
  trade_volume_24h_btc: 'Unknown',
  trade_volume_24h_btc_normalized: 'Unknown',
  trust_score: '0',
  trust_score_rank: '0',
  url: '-',
  twitter_handle: '',
  other_url_1: '',
  other_url_2: '',
  reddit_urlL: '',
  telegram_url: '',
  slack_url: '',
  facebook_url: '',
  centrialized: '-',
  public_notice: '-',
  tickers: null,
  status_updats: null,
};

export const sanitize = (exchange) => {
  const exchangeWithDefaults = {};
  for (const [key, defaultValue] of Object.entries(DEFAULTS)) {
    if (!exchange[key]) {
      exchangeWithDefaults[key] = defaultValue;
    } else {
      exchangeWithDefaults[key] = decodeInput(key, exchange[key]);
    }
  }

  return exchangeWithDefaults;
};

export const decodeInput = (key, value) => {
  if (key === 'url') return decodeURIComponent(value);
  if (key === 'other_url_1') return decodeURIComponent(value);
  if (key === 'other_url_2') return decodeURIComponent(value);
  if (key === 'slack_url') return decodeURIComponent(value);
  if (key === 'facebook_url') return decodeURIComponent(value);
  if (key === 'reddit_url') return decodeURIComponent(value);
  if (key === 'telegram_url') return decodeURIComponent(value);

  return value;
};
