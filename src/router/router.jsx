import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "./../MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
