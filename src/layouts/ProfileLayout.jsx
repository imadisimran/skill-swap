import Navbar from "../components/Navbar";
import ProfileInfo from "../components/ProfileInfo";
const ProfileLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <ProfileInfo></ProfileInfo>
      </main>
    </>
  );
};

export default ProfileLayout;
