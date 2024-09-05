import { NavLink, useRouteError } from "react-router-dom";
import { ROUTES } from "../Navigation/conts";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <p>
        Maybe you want to get back to our main page?{" "}
        <NavLink to={ROUTES.HOME}>Home </NavLink>{" "}
      </p>
    </div>
  );
};
export default ErrorPage;
