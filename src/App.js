import { Table } from './Table/Table';
import './App.css';
import { useGetExchangesQuery } from './services/exchangesApi';

// TODO: not using axios. can get rid of it

function App() {
  const { data, isLoading, error } = useGetExchangesQuery();
  if (error)
    return (
      <div>
        Apologies, an error has occured while getting your favourite exchanges!
      </div>
    );

  return (
    <div className="App">
      {isLoading ? <span>Loading...</span> : null}
      {data && (
        <div className="container">
          <Table onClick={() => {}} exchanges={data} />
        </div>
      )}
    </div>
  );
}

export default App;
