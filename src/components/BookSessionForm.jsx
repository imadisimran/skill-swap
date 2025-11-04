import React from "react";
import toast, { Toaster } from "react-hot-toast";

const BookSessionForm = ({ visibility }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booked Successfully");
  };

  return (
    <div
      className={`w-11/12 mx-auto duration-100 origin-top ${
        visibility ? "scale-y-100" : "scale-y-0"
      }`}
    >
      <form onSubmit={handleSubmit} className="ml-auto w-fit">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Customer Info</legend>

          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <button className="btn btn-neutral mt-4">Book</button>
        </fieldset>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default BookSessionForm;
