import { mock } from '../../mockResponse';
import { getURLParams } from '../../shared/getURLParams';
import { supportedParams } from './constants';

import './Exchange.css';

export const getExchangeFromURL = () => {
  const allParams = getURLParams();
  const exchange = {};
  for (const supportedParam of supportedParams) {
    if (allParams.has(supportedParam))
      exchange[supportedParam] = allParams.get(supportedParam);
  }
  return exchange;
};

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
