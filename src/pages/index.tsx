import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
    children: [
      { path: "/", element: <App /> },
      { path: "/games", element: <>Games</> },
    ],
  },
]);

export default router;
