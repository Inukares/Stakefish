import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const EXCHANGES_URL = `https://api.coingecko.com/api/v3/exchanges`;
const RESULTS_PER_REQUEST = 10;

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // todo: handle cleanup if http call fails in the meantime of updating component
    const doFetch = async () => {
      setLoading(true);
      const url = EXCHANGES_URL + `?per_page=${RESULTS_PER_REQUEST}`;
      try {
        const res = await axios.get(url);
        setData(res.data);
        setLoading(false);
      } catch (error) {
        if (error) console.log(error.toJson());
        setError(error);
      }
    };
    doFetch();
  }, []);
  console.log(data);

  return (
    <div className="App">
      {loading ? <span>loading</span> : null}
      {data && (
        <div className="container">
          {data.map((exchange, index) => (
            <div key={exchange.name ?? index} className="item">
              <div> {exchange.name}</div>
              <img
                data-test-id={exchange.name + '-img'}
                alt={exchange.name}
                src={exchange.image}
              ></img>
              <div> {exchange.year_established}</div>
              <div> {exchange.country}</div>
              <div> {exchange.has_trading_incentive ? 'Yes' : 'No'}</div>
              <div> {exchange.trust_score}</div>
              <div> {exchange.trust_score_rank}</div>
              <div> {exchange.trade_volume_24h_btc_normalized}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
