import { QueryClientProvider, QueryClient } from "react-query";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />;
    </QueryClientProvider>
  );
};

export default App;
