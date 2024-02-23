"use client";

import { PrimeReactProvider } from "primereact/api";

import { QueryClient, QueryClientProvider } from "react-query";
// Create a client
const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider>
        <main>{children}</main>
      </PrimeReactProvider>
    </QueryClientProvider>
  );
};

export default Provider;
