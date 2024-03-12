import {useRouteError} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navigation />
      <div
        id="error-page"
        className="w-full h-screen place-content-center text-center wrapper error-page "
      >
        <h1 className="md:text-5xl text-3xl font-light">Oops!</h1>
        <p className="md:text-xl text-sm py-6 font-light">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="md:text-sm text-xs text-green-900 font-light">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}
