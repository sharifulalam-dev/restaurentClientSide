import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<div className="font-bold flex justify-center items-center text-3xl bg-blue-600  text-white min-h-20">
        Hello world!
      </div>,
  },
]);

export default router;
