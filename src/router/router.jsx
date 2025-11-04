import { createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryItems from "../components/CategoryItems";
import AuthLayout from "../layouts/AuthLayout";
import HowItWorks from "../pages/HowItWorks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SkillDetails from "../components/SkillDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        index:true,
        element:<Navigate to='/category/creative_arts'></Navigate>
      },
      {
        path:'category/:id',
        element:<CategoryItems></CategoryItems>,
        loader:()=>fetch('/skillData.json'),
      }
    ],
    hydrateFallbackElement:<span className="loading loading-spinner loading-xl"></span>
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
  {
    path:'/how-it-works',
    element:<HowItWorks></HowItWorks>
  },
  {
    path:'/skill/:skillId',
    loader:()=>fetch('/skillData.json'),
    element:<PrivateRoute>
      <SkillDetails></SkillDetails>
    </PrivateRoute>
  }
]);

export default router