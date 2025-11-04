import React, { use, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

const Reset = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState(location.state);

  const haneleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Mail sent");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="w-11/12 mx-auto flex justify-center">
      <form onSubmit={handleReset}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Reset Password</legend>
          <div className="join">
            <input
              onChange={haneleEmail}
              name="email"
              type="email"
              className="input join-item"
              placeholder="Email"
              value={email}
            />
            <button className="btn join-item">Send Email</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Reset;
