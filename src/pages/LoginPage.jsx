import { Link, useNavigate } from "react-router-dom";
import FormWrapper from "../components/FormWrapper";
import { useContext } from "react";
import { AuthContext } from "../App";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setIsLogged, setUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setIsLogged(true);
    setUser({ email, password });
    navigate("/");
  };
  return (
    <FormWrapper title="Login">
      <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
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
    </FormWrapper>
  );
}
