import { Link, useNavigate } from "react-router-dom";
import FormWrapper from "../components/FormWrapper";
import { useContext, useMemo, useRef, useState } from "react";
import { AuthContext } from "../App";

export default function RegisterPage() {
  const navigate = useNavigate();
  const {setIsLogged, setUser} = useContext(AuthContext);
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const passwordsMatch = useMemo(
    () => password === confirmPassword,
    [password, confirmPassword]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password,
    };
    if (!passwordsMatch) {
      return;
    }
    console.log(payload);
    setIsLogged(true);
    setUser(payload);
    navigate("/");
  };
  return (
    <FormWrapper title="Register">
      <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="h-8 p-2 rounded"
            type="email"
            name="email"
            id="email"
            ref={emailRef}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            minLength={6}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="flex flex-col gap-1">
            <input
              className="h-8 p-2 rounded"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              id="confirmPassword"
              minLength={6}
              required
            />
            <p
              className={`opacity-0 text-red-500 text-xs font-mono ${
                password.length > 0 &&
                confirmPassword.length > 0 &&
                !passwordsMatch &&
                "opacity-100"
              }`}
            >
              Passwords do not match
            </p>
          </div>
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
    </FormWrapper>
  );
}
