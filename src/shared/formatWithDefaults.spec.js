import { fallbackToDefaults } from './fallbackToDefaults';

describe('fallbackToDefaults', () => {
  it('should not change already present values', () => {
    const exchange = {
      name: 'sth',
      year_established: 2000,
      country: 'UK',
      description: 'description',
      has_trading_incentive: true,
    };

    const expected = {
      name: 'sth',
      year_established: 2000,
      country: 'UK',
      description: 'description',
      has_trading_incentive: true,
      image: '-',
      trade_volume_24h_btc: 'Unknown',
      trade_volume_24h_btc_normalized: 'Unknown',
      trust_score: '0',
      trust_score_rank: '0',
      url: '-',
      twitter_handle: '-',
      other_url_1: '-',
      other_url_2: '-',
      reddit_urlL: '-',
      telegram_url: '-',
      slack_url: '-',
      facebook_url: '-',
      centrialized: '-',
      public_notice: '-',
      tickers: null,
      status_updats: null,
    };
    expect(fallbackToDefaults(exchange)).toEqual(expected);
  });

  it('should return defaults when values are falsy', () => {
    const expected = {
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
      twitter_handle: '-',
      other_url_1: '-',
      other_url_2: '-',
      reddit_urlL: '-',
      telegram_url: '-',
      slack_url: '-',
      facebook_url: '-',
      centrialized: '-',
      public_notice: '-',
      tickers: null,
      status_updats: null,
    };

    expect(fallbackToDefaults({})).toEqual(expected);
  });
});
