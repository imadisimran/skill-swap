// import React, { use } from "react";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
  // const {name}=use(AuthContext)
  // console.log(name)
  return (
    <nav className="shadow">
      <div className="w-11/12 mx-auto flex justify-between py-5">
        <Link className="text-2xl font-bold">Skill Swap</Link>
        <div className="space-x-5">
          <NavLink className={({isActive})=>isActive ? "underline" : ''} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>isActive ? "underline" : ''} to='/how-it-works'>How it works</NavLink>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-circle">
            <CgProfile size={40} />
          </button>
          <Link to='/auth/login' className="btn btn-primary">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
