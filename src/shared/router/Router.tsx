import { DashboardPage } from "@/dashboard/page/Dashboard";
import Layout from "@/Layout/Layout";
import { ListMoviesPage } from "@/ListMovies/page";
import { QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { queryClient } from "./query-client";

export const router = createBrowserRouter([
  {
    element: (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Outlet />
        </Layout>
      </QueryClientProvider>
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