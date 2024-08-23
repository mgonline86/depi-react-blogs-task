export default function BlogCard({ blog }) {
  return (
    <div
      className="flex flex-col p-4 gap-3 rounded-md shadow-md shadow-slate-400 bg-background w-full"
      key={blog.id}
    >
      <div>
        <h2 className="text-2xl font-semibold text-primary">{blog.title}</h2>
        <p className="text-sm text-gray-500">written by {blog.author}</p>
      </div>
      <p className="line-clamp-3">{blog.content}</p>
    </div>
  );
}
