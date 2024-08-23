export default function AddBlogPage() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      title: formData.get("title"),
      author: formData.get("author"),
      content: formData.get("content"),
    };
    
    const res = await fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const blog = await res.json();
    console.log(blog);
  };
  return (
    <div className="container mt-8 mx-auto max-w-md bg-secondary/20 rounded flex flex-col gap-5 justify-center shadow-lg min-h-64">
      <div className="flex justify-center items-center text-2xl font-bold text-center bg-secondary/30 h-14 rounded-t">
        New Blog
      </div>
      <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="title">
            Title
          </label>
          <input
            className="h-8 p-2 rounded"
            type="text"
            name="title"
            id="title"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="author">
            Author
          </label>
          <input
            className="h-8 p-2 rounded"
            type="text"
            name="author"
            id="author"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="content">
            Content
          </label>
          <textarea
            className="p-2"
            name="content"
            id="content"
            cols="20"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-accent/80 rounded w-full max-w-44 uppercase font-semibold shadow hover:bg-accent"
            type="submit"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}
