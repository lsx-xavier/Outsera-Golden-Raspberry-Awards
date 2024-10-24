import "../src/index.css";
import { initialize, mswLoader } from 'msw-storybook-addon'
import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

initialize()

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
     <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
      
  ],
};

export default preview;
