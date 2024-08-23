import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, NotebookIcon } from "lucide-react";
import { AuthContext } from "../App";

const links = [
  {
    name: "Blogs",
    path: "/blogs",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
  {
    name: "Logout",
    path: "/logout",
  },
];

export default function Header() {
  const navigate = useNavigate();
  const { isLogged, setIsLogged, setUser } = useContext(AuthContext);
  const mobileMenuRef = useRef();
  return (
    <header className="sticky top-0 z-10 bg-secondary mb-6 shadow-lg shadow-slate-200 h-14 flex">
      <nav className="container mx-auto max-w-screen-lg h-full px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center text-3xl font-bold transition duration-200 hover:scale-105"
        >
          <NotebookIcon className="h-8 w-8" strokeWidth={2} />
          Blogify
        </Link>
        <ul className="hidden md:flex md:gap-4">
          {links.map((link) => {
            if (link.name === "Login" && isLogged) return null;
            if (link.name === "Register" && isLogged) return null;
            if (link.name === "Logout" && !isLogged) return null;
            return (
              <Link
                key={link.name}
                to={link.name === "Logout" ? undefined : link.path}
                className="uppercase min-w-20 flex items-center justify-center rounded p-2 font-semibold  transition duration-100 hover:bg-accent"
                onClick={
                  link.name === "Logout"
                    ? () => {
                        setIsLogged(false);
                        setUser({});
                        navigate("/");
                      }
                    : undefined
                }
              >
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
        <details className="relative block md:hidden" ref={mobileMenuRef}>
          <summary className="cursor-pointer list-none">
            <MenuIcon className="h-10 w-10" />
          </summary>
          <ul className="flex flex-col absolute right-0 top-14 bg-secondary rounded">
            {links.map((link, i) => {
              if (link.name === "Login" && isLogged) return null;
              if (link.name === "Register" && isLogged) return null;
              if (link.name === "Logout" && !isLogged) return null;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`uppercase min-w-20 flex items-center justify-center p-2 font-semibold  transition duration-100 hover:bg-accent ${
                    i === 0
                      ? "hover:rounded-t"
                      : i === links.length - 1
                      ? "hover:rounded-b"
                      : ""
                  }`}
                  onClick={
                    link.name === "Logout"
                      ? () => {
                          setIsLogged(false);
                          setUser({});
                          navigate("/");
                        }
                      : () => (mobileMenuRef.current.open = false)
                  }
                >
                  <li>{link.name}</li>
                </Link>
              );
            })}
          </ul>
        </details>
      </nav>
    </header>
  );
}
