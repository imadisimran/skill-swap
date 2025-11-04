// import React, { use } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { use } from "react";
import toast from "react-hot-toast";
import tippy from "tippy.js";
import { FcButtingIn } from "react-icons/fc";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  tippy("#profilePic", {
    content: user?.displayName,
    animation: "shift-away",
    placement: "top",
    theme: "dark",
  });
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((err) => console.log(err.message));
  };
  // console.log(name)
  return (
    <nav className="shadow">
      <div className="w-11/12 mx-auto flex justify-between py-5">
        <Link to="/" className="text-2xl font-bold">
          Skill Swap
        </Link>
        <div className="space-x-5">
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "underline" : "")}
            to="/how-it-works"
          >
            How it works
          </NavLink>
        </div>
        <div className="flex items-center gap-5">
          <Link to='/profile' className="btn btn-circle">
            {user ? <FcButtingIn id='profilePic' size={40} />:<CgProfile id="profilePic" size={40} />}
          </Link>

          {user ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
