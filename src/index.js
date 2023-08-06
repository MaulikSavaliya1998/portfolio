import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalContextProvider from "./context/GlobalContext";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
