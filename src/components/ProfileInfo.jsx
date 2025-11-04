import React, { use } from "react";
import AuthContext from "../contexts/AuthContext";

const ProfileInfo = () => {
  const { user } = use(AuthContext);

  return (
    <div className="flex justify-center gap-5 mt-5">
      <img src={user?.photoURL}></img>
      <table>
        <tbody className="[&>tr>td:first-child]:font-bold">
          <tr>
            <td>Name:</td>
            <td>{user?.displayName}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button className="btn btn-primary w-full">Update Profile</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInfo;
