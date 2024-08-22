import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let query = new URLSearchParams();
    // set search query if it's not empty
    if (search.trim() !== "") query.set("q", search.trim().toLowerCase());

    const url = `http://localhost:8000/blogs?${query.toString()}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => {
        alert("Sorry! Something went wrong. Please try again later.");
        console.log(err);
      });
  }, [search]);

  return (
    <div className="flex flex-col gap-4 md:gap-8 items-center">
      <div className="flex flex-wrap flex-col-reverse gap-2 self-start justify-between w-full sm:flex-row">
        <div className="w-full max-w-md flex flex-col">
          <input
            type="search"
            className="px-2 py-3 align-middle border border-slate-300 rounded-md text-2xl font-bold"
            placeholder="Search Blogs..."
            onChange={(e) => setSearch(e.target.value.trim())}
            value={search}
            onBlur={(e) => (e.target.value = e.target.value.trim())}
          />
          {blogs.length > 0 && search && (
            <span className="text-slate-500 text-sm">
              {blogs.length} blogs found
            </span>
          )}
        </div>
        <Link
          to={"/blogs/new"}
          className="flex items-center px-4 py-2 bg-accent/80 rounded max-w-fit uppercase font-semibold shadow hover:bg-accent"
        >
          +Add Blog
        </Link>
      </div>
      {blogs.length === 0 && (
        <h2 className="text-center text-2xl font-semibold">No Blogs Found!</h2>
      )}
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
