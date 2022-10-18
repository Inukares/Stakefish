import { Link } from 'react-router-dom';
import './Table.css';
import { sanitize } from '../../shared/sanitize';

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
    const { name, country, image, url, trust_score_rank } = sanitize(exchange);
    // clicking on an exchange changes url to /exchange/EXCHANGE_NAME and renders Exchange.jsx
    return (
      <Link
        relative="path"
        to={link}
        key={exchange.name ?? index}
        className="item"
      >
        <div> {name}</div>
        <div> {country}</div>
        <img data-test-id={name + '-img'} alt={name} src={image}></img>
        <div> {url}</div>
        <div> {trust_score_rank}</div>
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
