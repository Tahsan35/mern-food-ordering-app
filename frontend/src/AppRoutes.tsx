import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout> home</Layout>,
    children: [
      { path: "/", element: <Layout>home page</Layout> },
      {
        path: "menu",
        element: <h4>out home</h4>,
      },
    ],
  },
]);
