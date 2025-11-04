import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import LoginSignUpWithGoogle from "../components/LoginSignUpWithGoogle";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import Tippy from "@tippyjs/react";

const Register = () => {
  const { createAccountEmail, setUser, addUserNamePhoto } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const uppercase = uppercaseRegex.test(password);
  const lowercase = lowercaseRegex.test(password);
  const length = password.length >= 6;
  // const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const handlePasswordValidation = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;

    if (!(uppercase && lowercase && length)) {
      toast.error("Password is not valid");
      return;
    }
    // const password = form.password.value;
    // console.log({name,url,email,password})
    createAccountEmail(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user)
        setUser(user);
        addUserNamePhoto({ displayName: name, photoURL: url });
        toast.success("Registered Successfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSignUp} className="relative">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl">Register</legend>

          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input
            name="url"
            type="url"
            className="input"
            placeholder="Photo URL"
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <div className="relative">
            <Tippy
              trigger="focus"
              arrow={true}
              placement="bottom"
              content={
                <PasswordValidationTXT
                  uppercase={uppercase}
                  lowercase={lowercase}
                  length={length}
                ></PasswordValidationTXT>
              }
            >
              <input
                value={password}
                onChange={handlePasswordValidation}
                name="password"
                type={show ? "text" : "password"}
                className="input"
                placeholder="Password"
                // onFocus={() => setVisible(true)}
                // onBlur={() => setVisible(false)}
              />
            </Tippy>
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

          <button className="btn btn-neutral mt-4">Register</button>
          <LoginSignUpWithGoogle state={location.state}></LoginSignUpWithGoogle>
          <p className="text-xs text-center">
            Already have an account?
            <Link className="text-red-500 font-bold" to="/auth/login">
              Login
            </Link>
          </p>
        </fieldset>
        {/* {visible && (
          <PasswordValidationTXT
            uppercase={uppercase}
            lowercase={lowercase}
            length={length}
          ></PasswordValidationTXT>
        )} */}
      </form>
    </div>
  );
};

const PasswordValidationTXT = ({ uppercase, lowercase, length }) => {
  return (
    <div className="bg-gray-100 p-5 rounded-xl">
      <p
        className={`flex items-center gap-3 ${
          uppercase ? "text-green-500" : "text-red-500"
        }`}
      >
        {uppercase ? <TiTick></TiTick> : <RxCross2></RxCross2>}
        At least 1 Uppercase
      </p>

      <p
        className={`flex items-center gap-3 ${
          lowercase ? "text-green-500" : "text-red-500"
        }`}
      >
        {lowercase ? <TiTick></TiTick> : <RxCross2></RxCross2>}
        At least 1 Lowercase
      </p>

      <p
        className={`flex items-center gap-3 ${
          length ? "text-green-500" : "text-red-500"
        }`}
      >
        {length ? <TiTick></TiTick> : <RxCross2></RxCross2>}
        At least 6 characters
      </p>
    </div>
  );
};

export default Register;
