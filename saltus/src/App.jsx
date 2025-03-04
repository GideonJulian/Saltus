import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={route} />;
};
export default App