import { useEffect, useState } from "react";
import Blog from "./Blog";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setFilteredBlogs(data);
      });
  }, []);

  const handleSearch = async (value) => {
    if (!value.trim()) {
      setFilteredBlogs(blogs);
      setSearch("");
      return;
    }
    const newFilteredBlogs = blogs.filter((blog) => {
      const blogText = [blog.title, blog.body, blog.author]
        .join(" ")
        .toLowerCase();
      return blogText.toLowerCase().includes(value.trim().toLowerCase());
    });
    setFilteredBlogs(newFilteredBlogs);
    setSearch(value);
  };

  const handleSetBlogs = () => {
    if (filteredBlogs.length > 0) {
      setFilteredBlogs([]);
    } else {
      handleSearch(search);
    }
  };

  return (
    <div className="container">
      <div className="nav">
        <h1>BLOGS</h1>
        <button className="btn btn-primary" onClick={handleSetBlogs}>
          {filteredBlogs.length > 0 ? "Clear all" : "Refresh"}
        </button>
      </div>
      <input
        type="search"
        className="search"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
        value={search}
        onBlur={(e) => (e.target.value = e.target.value.trim())}
      />
      {filteredBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default App;
