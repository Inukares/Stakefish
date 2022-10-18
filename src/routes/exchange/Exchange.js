import { useGetExchangeByNameQuery } from '../../services/exchangesApi';
import './Exchange.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { sanitize } from '../../shared/sanitize';

// TODO: Remove sanitize url package
export const formatTradeVolume = (volumeNormalised, volume) => {
  if (volumeNormalised) return volumeNormalised;
  if (volume) return volume;
  return 'Unknown';
};

export const Exchange = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetExchangeByNameQuery(id);
  if (error) return <span>An error has occured.</span>;
  if (isLoading) return <span>Loading...</span>;
  if (!data) return <span>Didn't hear back from API :(</span>;

  console.log(data);
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
    twitter_handle,
    other_url_1,
    other_url_2,
    reddit_url,
    telegram_url,
    slack_url,
    facebook_url,
  } = sanitize(data);

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
      {image ? (
        <img alt={`${name} exchange`} src={image} />
      ) : (
        <span>Not available</span>
      )}
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
      <div>Reddit</div>
      <div>{reddit_url}</div>
      <div>Facebook</div>
      <div>{facebook_url}</div>
      <div>Slack</div>
      <div>{slack_url}</div>
      <div>Telegram</div>
      <div>{telegram_url}</div>
      <div>Twitter</div>
      <div>{twitter_handle}</div>
      <div>Other links</div>
      <div className="social">
        {other_url_1 && <span>{other_url_1}</span>}
        {other_url_2 && <span>{other_url_2}</span>}
      </div>
    </>
  );
  return (
    <div className="wrapper">
      <Link to={'..'} path="relative">
        <button className="button">Go Back to Main page</button>
      </Link>
      <div className="grid">{content}</div>
    </div>
  );
};
