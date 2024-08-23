import { useRef } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "lucide-react";

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
];

export default function Header() {
  const mobileMenuRef = useRef();
  return (
    <header className="sticky top-0 z-10 bg-secondary mb-6 shadow-lg shadow-slate-200 h-14 flex">
      <nav className="container mx-auto max-w-screen-lg h-full px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold transition duration-200 hover:scale-105"
        >
          Blogify
        </Link>
        <ul className="hidden md:flex md:gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="uppercase min-w-20 flex items-center justify-center rounded p-2 font-semibold  transition duration-100 hover:bg-accent"
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        <details className="relative block md:hidden" ref={mobileMenuRef}>
          <summary className="cursor-pointer list-none">
          <MenuIcon className="h-10 w-10" />
          </summary>
          <ul className="flex flex-col gap-4 absolute right-0 top-14 bg-secondary rounded p-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="uppercase min-w-20 flex items-center justify-center rounded p-2 font-semibold  transition duration-100 hover:bg-accent"
                onClick={() => (mobileMenuRef.current.open = false)}
              >
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
