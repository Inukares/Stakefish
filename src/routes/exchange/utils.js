import { getURLParams } from '../../shared/getURLParams';

export const getExchangeFromURL = () => {
  const allParams = getURLParams();
  return allParams.get('id');
};
