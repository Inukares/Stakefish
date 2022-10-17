import { formatTradeVolume } from '../routes/exchange/Exchange';
import { Link } from 'react-router-dom';
import './Table.css';

export const Table = ({ exchanges }) => {
  const header = (
    <div className="header">
      <div>Exchange</div>
      <div>Country</div>
      <div>Image</div>
      <div>URL</div>
      <div>Trust score rank</div>
    </div>
  );

  const content = exchanges.map((exchange, index) => {
    const link = `/exchange/${exchange.id}`;

    return (
      <Link
        relative="path"
        to={link}
        key={exchange.name ?? index}
        className="item"
      >
        <div> {exchange.name ?? '-'}</div>
        <div> {exchange.country ?? '-'}</div>
        <img
          data-test-id={exchange.name + '-img'}
          alt={exchange.name}
          src={exchange.image}
        ></img>
        <div> {exchange.url ?? 'Not specified'}</div>
        <div> {exchange.trust_score_rank ?? '-'}</div>
      </Link>
    );
  });

  return (
    <>
      {header}
      {content}
    </>
  );
};
