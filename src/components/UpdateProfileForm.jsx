import React, { use } from "react";
import AuthContext from "../contexts/AuthContext";
import toast from "react-hot-toast";
import auth from "../firebase/firebase.config";

const UpdateProfileForm = () => {
    const {addUserNamePhoto}=use(AuthContext)

    const handleUpdate=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value;
        const url=form.url.value;
        addUserNamePhoto({displayName:name,photoURL:url})
        .then(()=>{
            return auth.currentUser.reload()
        })
        .then(()=>{
            toast.success("Changed successfully");
        })
        .catch(err=>{
            console.log(err)
            toast.error('Something Wrong')
        })
    }
  return (
    <form onSubmit={handleUpdate}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Update Profile Info</legend>

        <label className="label">Name</label>
        <input name='name' type="text" className="input" placeholder="Name" />


        <label className="label">Image</label>
        <input name="url" type="url" className="input" placeholder="Image URL" />

        <button className="btn btn-neutral mt-4">Update</button>
      </fieldset>
    </form>
  );
};

export default UpdateProfileForm;
