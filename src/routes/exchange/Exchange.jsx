import { useGetExchangeByNameQuery } from '../../services/exchangesApi';
import './Exchange.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { Grid } from './Grid';

export const Exchange = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetExchangeByNameQuery(id);
  if (error) return <NotFound error={error} />;
  if (isLoading) return <span>Loading...</span>;
  if (!data) return <span>Didn't hear back from API :(</span>;

  return (
    <div className="wrapper">
      <Link to={'/'}>
        <button className="button">Go Back to Main page</button>
      </Link>
      <Grid data={data} />
    </div>
  );
};
