import { ListMoviesPage } from "@/ListMovies/page";
import { DashboardPage } from "@/dashboard/page/Dashboard";
import Layout from "@/Layout/Layout";
import { IconContext } from "react-icons";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: (
      <IconContext.Provider
        value={{ color: "black", className: "global-class-name" }}
      >
        <Layout>
          <Outlet />
        </Layout>
      </IconContext.Provider>
    ),
    children: [
      {
        path: DashboardPage.path,
        element: DashboardPage.element,
      },
      {
        path: ListMoviesPage.path,
        element: ListMoviesPage.element,
      },
    ],
  },
]);
