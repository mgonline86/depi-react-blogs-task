export default function AddBlogPage() {
  return (
    <div className="container mt-8 mx-auto max-w-md bg-secondary/20 p-4 rounded flex flex-col gap-5 justify-center shadow-lg min-h-64">
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="title">Title</label>
          <input className="h-8 p-2" type="text" name="title" id="title" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="author">Author</label>
          <input className="h-8 p-2" type="text" name="author" id="author" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="content">Content</label>
          <textarea className="p-2" name="content" id="content" cols="20" rows="5"></textarea>
        </div>
        <button className="px-4 py-2 bg-accent/80 rounded max-w-sm uppercase font-semibold shadow hover:bg-accent" type="submit">Add Blog</button>
      </form>
    </div>
  );
}
