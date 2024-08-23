import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="container mt-8 mx-auto max-w-md bg-secondary/20 rounded flex flex-col gap-5 justify-center shadow-lg min-h-64">
      <div className="flex justify-center items-center text-2xl font-bold text-center bg-secondary/30 h-14 rounded-t">
        Login
      </div>
      <form className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="h-8 p-2 rounded"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="h-8 p-2 rounded"
            type="password"
            name="password"
            id="password"
            minLength={6}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-accent/80 rounded w-full max-w-44 uppercase font-semibold shadow hover:bg-accent"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
