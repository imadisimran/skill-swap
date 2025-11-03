import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryItems from "../components/CategoryItems";
import AuthLayout from "../layouts/AuthLayout";
import HowItWorks from "../pages/HowItWorks";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:'category/:id',
        element:<CategoryItems></CategoryItems>,
        loader:()=>fetch('/skillData.json'),
      }
    ]
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
  }
]);

export default router