import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="container mt-8 mx-auto max-w-screen-lg bg-secondary/20 p-4 rounded text-center flex flex-col gap-5 justify-center items-center shadow-lg min-h-64"
    >
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="font-semibold">
          Sorry, an unexpected error has occurred.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-slate-500 text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <a
        href="/"
        className="px-4 py-2 bg-accent/80 rounded max-w-sm uppercase font-semibold shadow hover:bg-accent"
      >
        Back to home
      </a>
    </div>
  );
}
