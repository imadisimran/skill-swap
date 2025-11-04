import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import ProfileInfo from "../components/ProfileInfo";
import { Toaster } from "react-hot-toast";
const ProfileLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <ProfileInfo></ProfileInfo>
        <section className="flex justify-center">
            <Outlet></Outlet>
        </section>
      </main>
      <Toaster></Toaster>
    </>
  );
};

export default ProfileLayout;
