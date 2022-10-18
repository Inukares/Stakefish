import { sanitize } from '../../shared/sanitize';

const formatTradeVolume = (volumeNormalised, volume) => {
  if (volumeNormalised) return volumeNormalised;
  if (volume) return volume;
  return 'Unknown';
};

export const Grid = ({ data }) => {
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
      <div>Incentives Trading</div>
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
      <span>
        <a target={'_blank'} href={url} rel="noopener noreferrer">
          {url}
        </a>
      </span>
      <div>Reddit</div>
      <span>
        <a target={'_blank'} href={reddit_url} rel="noopener noreferrer">
          {reddit_url}
        </a>
      </span>
      <div>Facebook</div>
      <span>
        <a target={'_blank'} href={facebook_url} rel="noopener noreferrer">
          {facebook_url}
        </a>
      </span>
      <div>Slack</div>
      <span>
        <a target={'_blank'} href={slack_url} rel="noopener noreferrer">
          {slack_url}
        </a>
      </span>
      <div>Telegram</div>
      <span>
        <a target={'_blank'} href={telegram_url} rel="noopener noreferrer">
          {telegram_url}
        </a>
      </span>
      <div>Twitter</div>
      <div>{twitter_handle}</div>
      <div>Other links</div>
      <div className="social">
        {other_url_1 && (
          <span>
            <a target={'_blank'} href={other_url_1} rel="noopener noreferrer">
              {other_url_1}
            </a>
          </span>
        )}
        {other_url_2 && (
          <span>
            <a target={'_blank'} href={other_url_2} rel="noopener noreferrer">
              {other_url_2}
            </a>
          </span>
        )}
      </div>
    </>
  );

  return <div className="grid">{content}</div>;
};
