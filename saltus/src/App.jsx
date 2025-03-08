import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layouts from "./Layouts/Layouts";
import JoinForm from "./pages/Join";
import SuccessModal from "./pages/SuccessModal";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "join",
          element: <JoinForm />,
        },
        {
          path: "successModal",
          element: <SuccessModal />,
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
};

export default App;
