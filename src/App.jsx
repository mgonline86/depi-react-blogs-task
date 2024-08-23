import { Fragment } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer";

export default function Layout() {
  return (
    <Fragment>
      <Header />
      <main className="container max-w-screen-lg mx-auto px-4 my-8 pb-14">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
