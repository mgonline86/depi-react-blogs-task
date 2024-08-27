import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import OnScrollReveal from "../components/animate/OnScrollReveal";
import { debounce } from "../utils/helpers";
import { Loader2Icon } from "lucide-react";
import AuthedContentWrapper from "../components/auth/AuthedContentWrapper";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

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
      })
      .finally(() => setLoading(false));
  }, [search]);

  if (loading)
    return (
      <div className="flex items-center gap-4 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Loader2Icon className="w-10 h-10 animate-spin" />
      </div>
    );

  return (
    <>
      <div className="flex flex-wrap flex-col-reverse gap-2 self-start justify-between w-full sm:flex-row">
        <div className="w-full max-w-md flex flex-col">
          <input
            type="search"
            className="max-h-10 p-2 align-middle border border-slate-300 rounded-md text-xl font-bold"
            placeholder="Search Blogs..."
            onChange={(e) => debounce(setSearch(e.target.value), 500)}
            value={search}
            onBlur={(e) => (e.target.value = e.target.value.trim())}
          />
          <span
            className={`text-slate-500 text-xs ${
              blogs.length > 0 && search.trim().length > 0
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            {blogs.length} blogs found
          </span>
        </div>
        <AuthedContentWrapper>
          <Link
            to={"/blogs/new"}
            className="flex items-center px-4 py-2 bg-accent/80 rounded max-w-fit max-h-10 uppercase font-semibold shadow self-end hover:bg-accent sm:self-auto"
          >
            +Add Blog
          </Link>
        </AuthedContentWrapper>
      </div>
      <div className="flex flex-col gap-6 md:gap-8 items-center">
        {blogs.length === 0 && (
          <h2 className="text-center text-2xl font-semibold">
            No Blogs Found!
          </h2>
        )}
        {blogs.map((blog) => (
          <OnScrollReveal
            key={blog.id}
            className="flex flex-col gap-4 md:gap-8 items-center w-full"
          >
            <BlogCard blog={blog} />
          </OnScrollReveal>
        ))}
      </div>
    </>
  );
}
