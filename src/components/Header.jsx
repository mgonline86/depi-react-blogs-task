import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 bg-secondary mb-6 shadow-lg h-14 flex">
      <nav className="container mx-auto max-w-screen-lg h-full px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-bold transition duration-200 hover:scale-105"
        >
          Blogify
        </Link>
        <ul className="flex gap-4">
          <Link className="uppercase min-w-20 flex items-center justify-center rounded p-2 font-semibold  transition duration-100 hover:bg-accent" to="/blogs">
            <li>Blogs</li>
          </Link>
          <Link className="uppercase min-w-20 flex items-center justify-center rounded p-2 font-semibold  transition duration-100 hover:bg-accent" to="/login">
            <li>Login</li>
          </Link>
          <Link className="uppercase min-w-20 flex items-center justify-center rounded p-2 font-semibold  transition duration-100 hover:bg-accent" to="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
