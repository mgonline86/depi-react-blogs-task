import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="container mt-8 mx-auto max-w-md bg-secondary/20 rounded flex flex-col gap-5 justify-center shadow-lg min-h-64">
      <div className="flex justify-center items-center text-2xl font-bold text-center bg-secondary/30 h-14 rounded-t">
        Register
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
            minLength={8}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="h-8 p-2 rounded"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            minLength={8}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-accent/80 rounded w-full max-w-44 uppercase font-semibold shadow hover:bg-accent"
            type="submit"
          >
            Register
          </button>
        </div>
        <div>
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
