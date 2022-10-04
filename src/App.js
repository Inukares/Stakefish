import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const EXCHANGES_URL = `https://api.coingecko.com/api/v3/exchanges`;
const RESULTS_PER_REQUEST = 10;

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const doFetch = async () => {
      const url = EXCHANGES_URL + `?per_page=${RESULTS_PER_REQUEST}`;
      try {
        const res = await axios.get(url);
        setData(res.data);
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
      <div>hi</div>
    </div>
  );
}

export default App;
