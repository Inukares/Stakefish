import './Exchange.css';
import { getSanitizedExchange } from './utils';

export const formatTradeVolume = (volumeNormalised, volume) => {
  if (volumeNormalised) return volumeNormalised;
  if (volume) return volume;
  return 'Unknown';
};

// should I return {name: ''} even if there is no key? Would be good for destructuring
// could use supported_params for that
// could early on check if getExchangeParamsFrmURL returns any keys and if not show some error
// that way user would've been informed that something went wrong

export const Exchange = () => {
  const { name, year_established, country } = getSanitizedExchange();
  console.log(getSanitizedExchange());
  return (
    <div className="wrapper">
      <div>Name</div>
      <div>Binance</div>
      <div>Year Established</div>
      <div>2017</div>
    </div>
  );
};
