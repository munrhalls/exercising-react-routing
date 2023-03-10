import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import Classes from "./Classes";
import Curriculum from "./Curriculum";
import Exams from "./Exams";
import Groups from "./Groups";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "classes",
    element: <Classes />,
  },
  {
    path: "curriculum",
    element: <Curriculum />,
  },
  {
    path: "exams",
    element: <Exams />,
  },
  {
    path: "groups",
    element: <Groups />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
