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
  const {
    name,
    year_established,
    country,
    description,
    has_trading_incentive,
    image,
    trade_volume_24h_btc,
    trade_volume_24h_btc_normalized,
    trust_score,
    trust_score_rank,
    url,
  } = getSanitizedExchange();

  const content = (
    <>
      <div>Name</div>
      <div>{name}</div>
      <div>Year Established</div>
      <div>{year_established}</div>
      <div>Country</div>
      <div>{country}</div>
      <div>Description</div>
      <div>{description}</div>
      <div>Incentivies Trading</div>
      <div>{has_trading_incentive}</div>
      <div>Logo</div>
      {image ? <img src={image} /> : <span>Not available</span>}
      <div>BTC 24H Volume</div>
      <div>
        {formatTradeVolume(
          trade_volume_24h_btc,
          trade_volume_24h_btc_normalized
        )}
      </div>
      <div>Trust Score</div>
      <div>{trust_score}</div>
      <div>Trust Score Rank</div>
      <div>{trust_score_rank}</div>
      <div>Url</div>
      <div>{url}</div>
    </>
  );
  return <div className="wrapper">{content}</div>;
};
