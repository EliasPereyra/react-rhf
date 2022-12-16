import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oh no!</h1>
      <p>This page isn't available, better go back home...</p>
      <p>
        <b>{error.message}</b>
      </p>
    </div>
  );
}

export default ErrorPage;
