import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryItems from "../components/CategoryItems";

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
]);

export default router