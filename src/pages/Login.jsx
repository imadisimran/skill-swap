import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {

  const {logIn,setUser}=use(AuthContext);
  const navigate=useNavigate();

  const handleLogin=(event)=>{
    event.preventDefault()
    const form=event.target;
    const email=form.email.value
    const password=form.password.value;
    logIn(email,password)
    .then(result=>{
      const user=result.user;
      setUser(user)
      toast.success('Login Successful')
      navigate('/')
    })
    .catch(err=>{
      console.log(err.message)
    })

  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl">Login</legend>

          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
          <p className="text-xs text-center">Don't have an account?<Link className="text-red-500 font-bold" to='/auth/register'>Register</Link></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
