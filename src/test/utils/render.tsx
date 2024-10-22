import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as defaultRender, RenderOptions } from "@testing-library/react";

import {
  RouterProvider,
  createMemoryRouter,
  Outlet,
  RouteObject,
} from "react-router-dom";

export type CustomRenderOptions = {
  renderOptions?: RenderOptions;
  routes?: RouteObject[];
  searchParams?: string;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const renderInsideRouterProvider = (
  component: React.ReactNode,
  options?: CustomRenderOptions,
) => {
  const routes = [
    {
      path: "/",
      element: (
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      ),

      children: [
        {
          path: "/",
          element: component,
        },
        ...(options?.routes ? options.routes : []),
      ],
    },
  ] as RouteObject[];

  const router = createMemoryRouter(routes, {
    initialEntries: options?.searchParams
      ? [`?${options.searchParams}`]
      : ["/"],
  });

  return <RouterProvider router={router} />;
};

export const customRender = (
  component: React.ReactNode,
  options?: CustomRenderOptions,
) =>
  defaultRender(
    renderInsideRouterProvider(component, options),
    options?.renderOptions,
  );
