import FormWrapper from "../components/FormWrapper";

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
    <FormWrapper title="Add Blog">
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
            minLength={5}
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
            minLength={5}
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
            minLength={10}
            maxLength={5000}
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
    </FormWrapper>
  );
}
