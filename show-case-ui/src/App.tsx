import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersonTable } from "./components/person-table";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex justify-center items-center">
        <div className="py-8 px-8 bg-white rounded-2xl w-2/3">
          <PersonTable />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
