import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import LoginSignUpWithGoogle from "../components/LoginSignUpWithGoogle";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const Login = () => {
  const { logIn, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const haneleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email=form.email.value
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Login Unsuccessfull");
        console.log(err.message);
      });
  };

  console.log(email);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl">Login</legend>

          <label className="label">Email</label>
          <input
            onChange={haneleEmail}
            name="email"
            value={email}
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <div className="relative">
            <input
              name="password"
              type={show ? 'text':'password'}
              className="input"
              placeholder="Password"
            />
            {show ? (
              <IoEyeOffSharp
                className="absolute right-3 top-3 cursor-pointer text-lg z-10"
                onClick={() => setShow(!show)}
              ></IoEyeOffSharp>
            ) : (
              <IoEye
                className="absolute right-3 top-3 cursor-pointer text-lg z-10"
                onClick={() => setShow(!show)}
              ></IoEye>
            )}
          </div>
          <Link
            state={email}
            to="/auth/reset"
            className="text-xs text-red-500 underline"
          >
            Forgot Password? Reset
          </Link>
          <button className="btn btn-neutral mt-4">Login</button>
          <LoginSignUpWithGoogle state={location.state}></LoginSignUpWithGoogle>
          <p className="text-xs text-center">
            Don't have an account?
            <Link
              className="text-red-500 font-bold"
              to="/auth/register"
              state={location.state}
            >
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
