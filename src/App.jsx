import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

export const AuthContext = createContext();

export default function Layout() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const values = { isLogged, setIsLogged, user, setUser };
  return (
    <AuthContext.Provider value={values}>
      <Header />
      <main className="container max-w-screen-lg mx-auto px-4 my-8 pb-14">
        <Outlet />
      </main>
    </AuthContext.Provider>
  );
}
