import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className= "shadow">
        <div className="w-11/12 mx-auto flex justify-between py-5">
            <Link className="text-2xl font-bold">Skill Swap</Link>
        <div className="flex items-center gap-5">
            <button className="btn btn-circle"><CgProfile size={40} /></button>
            <Link className="btn btn-primary">Login</Link>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
