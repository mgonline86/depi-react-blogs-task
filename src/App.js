import { useState } from "react";

const initialBlogs = [
  { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  {
    title: "Welcome party!",
    body: "lorem ipsum...",
    author: "luigi",
    id: 2,
  },
  {
    title: "Web dev top tips",
    body: "lorem ipsum...",
    author: "yoshi",
    id: 3,
  },
];

function App() {
  const [blogs, setBlogs] = useState(initialBlogs);
  return (
    <div className="container">
      <div className="nav">
        <h1>BLOGS</h1>
        <button className="btn btn-primary" onClick={() => setBlogs([])}>
          Clear all
        </button>
      </div>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p className="author">written by {blog.author}</p>
          <p className="body">{blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
