"use client";

import { Theme } from "@radix-ui/themes";
import {
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

  // Create a client
const queryClient = new QueryClient()

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme accentColor="blue" grayColor="gray">
      <main className="p-7">{children}</main>
      {/* <ThemePanel /> */}
    </Theme>      
    </QueryClientProvider>

  );
};

export default Provider;
