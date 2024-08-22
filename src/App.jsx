import { Fragment } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <Fragment>
        <Header />
        <main className="container max-w-screen-lg mx-auto px-4">
            <Outlet />
        </main>
    </Fragment>
  );
}
