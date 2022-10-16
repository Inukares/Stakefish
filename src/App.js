import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table } from './Table/Table';
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

  const onClick =(url) => {
    

  }

  return (
    <div className="App">
      {loading ? <span>loading</span> : null}
      {data && (
        <div className="container">
          <Table onClick={onClick} exchanges={data} />
        </div>
      )}
    </div>
  );
}

export default App;
