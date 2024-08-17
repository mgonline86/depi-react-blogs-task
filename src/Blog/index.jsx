export default function Blog({ blog }) {
  return (
    <div className="blog-preview" key={blog.id}>
      <h2>{blog.title}</h2>
      <p className="author">written by {blog.author}</p>
      <p className="body">{blog.content}</p>
    </div>
  );
}
