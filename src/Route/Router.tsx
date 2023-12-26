import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import {
  HomePage,
  LearnPage,
  FaqPage,
  ReportsPage,
  RequestLayout,
  ErrorPage,
  ChooseLocation,
  ChooseCategories,
  Determination,
  RequestsType,
  RequestDateAndTime,
  AcceptedRequest,
  Driver,
} from "../pages/pageImports";
import AppLayout from "../components/AppLayout";
import { Register } from "../user/Register";
import { Login } from "../user/Login";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,

      children: [
        {
          path: "register",
          element: <Register />,
          errorElement: <ErrorPage />,
        },
        {
          path: "login",
          element: <Login />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "learn",
          element: <LearnPage />,
        },
        {
          path: "faq",
          element: <FaqPage />,
        },
        {
          path: "request",
          element: <RequestLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <ChooseLocation />,
            },
            {
              path: "categories",
              element: <ChooseCategories />,
            },
            {
              path: "determination",
              element: <Determination />,
            },
            {
              path: "type",
              element: <RequestsType />,
            },
            {
              path: "date-time",
              element: <RequestDateAndTime />,
            },
            {
              path: "details/:id",
              element: <AcceptedRequest />,
            },
          ],
        },
        {
          path: "driver",
          element: <Driver />,
        },
        {
          path: "reports",
          element: <ReportsPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
