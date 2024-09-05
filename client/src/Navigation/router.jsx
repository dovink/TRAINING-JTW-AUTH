import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import AuthLayout from "../components/Layouts/Auth-layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ProtectedLayout from "../components/Layouts/Protected-layout";
import { ROUTES } from "./conts";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
  {
    element: <ProtectedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
    ],
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
