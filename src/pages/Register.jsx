import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Register = () => {

  const {createAccountEmail,setUser,addUserNamePhoto}=use(AuthContext)
  const location=useLocation();
  const navigate=useNavigate()

  const handleSignUp=(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value;
    const url=form.url.value;
    const email=form.email.value;
    const password=form.password.value;
    // console.log({name,url,email,password})
    createAccountEmail(email,password)
    .then(result=>{
      const user=result.user
      // console.log(user)
      setUser(user)
      addUserNamePhoto({displayName:name,photoURL:url})
      toast.success('Registered Successfully')
      navigate(location.state ? location.state : '/')
    })
    .catch(err=>{
      console.log(err.message)
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSignUp}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl">Register</legend>

          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input name="url" type="url" className="input" placeholder="Photo URL" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-xs text-center">Already have an account?<Link className="text-red-500 font-bold" to='/auth/login'>Login</Link></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
