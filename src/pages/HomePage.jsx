import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="container mt-8 mx-auto max-w-screen-lg bg-secondary/20 p-4 rounded text-center flex flex-col gap-5 justify-center items-center shadow-lg min-h-64">
      <h1 className="text-3xl font-bold">Welcome to Blogify</h1>
      <p className="text-lg">
        Explore our blogs, add new ones, and share them with the world!
      </p>
      <Link
        to="/blogs"
        className="px-4 py-2 bg-accent/80 rounded max-w-sm uppercase font-semibold shadow hover:bg-accent"
      >
        Let's get started!
      </Link>
    </div>
  );
}
