export default function NotFound({ error }) {
  console.error(error);

  if (error.status === 404)
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, couldn't find matching exhange</p>
        <p>{/* <i>{error.data || error.message}</i> */}</p>
      </div>
    );

  return (
    <div>
      <h1>Apologies!</h1>
      <p>Unknown error has occured.</p>
    </div>
  );
}
