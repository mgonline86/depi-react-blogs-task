import { useEffect, useMemo, useState, useCallback } from "react";
import BlogCard from "../components/BlogCard";
import { Link, useSearchParams } from "react-router-dom";
import OnScrollReveal from "../components/animate/OnScrollReveal";
import { debounce } from "../utils/helpers";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import AuthedContentWrapper from "../components/auth/AuthedContentWrapper";
import PaginationButton from "../components/ui/pagination-button";
import Loader from "../components/ui/loader";

export default function BlogsPage() {
  const FIRST_PAGE = 1;
  const PAGE_LIMIT = 10;
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [loading, setLoading] = useState(true);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [page, setPage] = useState(
    Number(searchParams.get("page")) || FIRST_PAGE
  );
  const [pageLimit, setPageLimit] = useState(
    Number(searchParams.get("limit")) || PAGE_LIMIT
  );

  const lastPage = useMemo(() => {
    return Math.ceil(totalBlogs / pageLimit);
  }, [totalBlogs, pageLimit]);

  useEffect(() => {
    setPage(Number(searchParams.get("page")) || 1);
    setPageLimit(Number(searchParams.get("limit")) || PAGE_LIMIT);
  }, [searchParams]);

  // Debounced fetchBlogs function to avoid excessive API calls
  const fetchBlogs = useCallback(
    debounce(async (search, page, pageLimit) => {
      try {
        setLoading(true);
        const query = search.trim() ? `&q=${search.trim().toLowerCase()}` : "";
        const url = `http://localhost:8000/blogs?_page=${page}&_limit=${pageLimit}${query}`;
        const res = await fetch(url);
        const totalCount = res.headers.get("x-total-count");
        setTotalBlogs(totalCount);
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        alert("Sorry! Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchBlogs(search, page, pageLimit);
  }, [search, page, pageLimit, fetchBlogs]);

  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    const params = {};

    if (newSearch.trim()) {
      params.q = newSearch;
    }

    if (page !== FIRST_PAGE) {
      params.page = page;
    }

    if (pageLimit !== PAGE_LIMIT) {
      params.limit = pageLimit;
    }

    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    const params = {};

    if (search.trim()) {
      params.q = search;
    }

    if (newPage !== FIRST_PAGE) {
      params.page = newPage;
    }

    if (pageLimit !== PAGE_LIMIT) {
      params.limit = pageLimit;
    }

    setSearchParams(params);
  };

  if (loading) return <Loader />;

  return (
    <>
      <div className="flex flex-wrap flex-col-reverse gap-2 self-start justify-between w-full sm:flex-row">
        <div className="w-full max-w-md flex flex-col">
          <input
            type="search"
            className="max-h-10 p-2 align-middle border border-slate-300 rounded-md text-xl font-bold"
            placeholder="Search Blogs..."
            onChange={handleSearchChange}
            value={search}
            onBlur={(e) => setSearch(e.target.value.trim())}
            autoFocus
          />
          <span className="text-slate-500 text-xs ps-2">
            Showing {blogs.length} of {totalBlogs} blogs found
          </span>
        </div>
        <AuthedContentWrapper>
          <Link
            to="/blogs/new"
            className="flex items-center px-4 py-2 bg-accent/80 rounded max-w-fit max-h-10 uppercase font-semibold shadow text-slate-50 self-end hover:bg-accent disabled:bg-slate-500 sm:self-auto"
          >
            +Add Blog
          </Link>
        </AuthedContentWrapper>
      </div>
      <div className="flex flex-col gap-6 mt-4 items-center min-h-[50vh] md:gap-8">
        {blogs.length === 0 && (
          <h2 className="text-center text-2xl font-semibold my-4 text-slate-600 md:text-3xl">
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
      <div className="mt-3 flex items-center justify-center sticky bottom-2 z-10">
        <div className="flex items-center gap-2 px-2 py-1 bg-slate-300/80 shadow-xl rounded-3xl border-2 md:gap-4 md:px-4 md:py-2">
          <PaginationButton
            disabled={page === FIRST_PAGE}
            onClick={() => handlePageChange(FIRST_PAGE)}
            icon={<ChevronFirstIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
          <PaginationButton
            disabled={page === FIRST_PAGE}
            onClick={() => handlePageChange(page - 1)}
            icon={<ChevronLeftIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
          <PaginationButton
            disabled={page === lastPage}
            onClick={() => handlePageChange(page + 1)}
            icon={<ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
          <PaginationButton
            disabled={page === lastPage}
            onClick={() => handlePageChange(lastPage)}
            icon={<ChevronLastIcon className="w-4 h-4 md:w-5 md:h-5" />}
          />
        </div>
      </div>
    </>
  );
}
