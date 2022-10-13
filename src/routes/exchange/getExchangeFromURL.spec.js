import { supportedParams } from './constants';
import { getExchangeFromURL } from './Exchange';

describe('getExchangeFromURL', () => {
  beforeEach(() => {
    // context:
    // https://www.csrhymes.com/2022/06/18/mocking-window-location-in-jest.html#make-a-new-object
    delete global.window.location;
    global.window = Object.create(window);

    global.window.location = {
      ancestorOrigins: null,
      hash: null,
      host: 'dummy.com',
      port: '80',
      protocol: 'http:',
      hostname: 'dummy.com',
      href: 'http://dummy.com?page=1&name=testing',
      search: 'http://dummy.com?page=1&name=testing',
      origin: 'http://dummy.com',
      pathname: null,
      search: null,
      assign: null,
      reload: null,
      replace: null,
    };
  });
  it('should get all supported params', () => {
    // goal is to achieve similar url to below, but with ensuring SUPPORTED_PARAMS is a whitelist
    //'http://dummy.com/exchange?name=binance&year_established=2017&country=japan.......';
    let href = 'http://dummy.com/';
    href += supportedParams.reduce((accumulator, param) => {
      return accumulator + param + `=${param}&`;
    }, 'exchange?');

    global.window.location.search = href;
    const expected = {
      country: 'country',
      description: 'description',
      has_trading_incentive: 'has_trading_incentive',
      image: 'image',
      trade_volume_24h_btc: 'trade_volume_24h_btc',
      trade_volume_24h_btc_normalized: 'trade_volume_24h_btc_normalized',
      trust_score: 'trust_score',
      trust_score_rank: 'trust_score_rank',
      url: 'url',
      year_established: 'year_established',
    };
    expect(getExchangeFromURL()).toEqual(expected);
  });

  it('should omit not supported params', () => {
    global.window.location.search = 'http://dummy.com?someparam=param';
    expect(getExchangeFromURL()).toEqual({});
  });

  it('should work with both supported and not suported params', () => {
    global.window.location.search =
      'http://dummy.com?someparam=param&country=UK&url=maliciousURL&something=15';
    const expected = {
      country: 'UK',
      url: 'maliciousURL',
    };
    expect(getExchangeFromURL()).toEqual(expected);
  });
});

describe('sanitizeInput', () => {});
