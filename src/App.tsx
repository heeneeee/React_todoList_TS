import { QueryClientProvider, QueryClient } from "react-query";
import GlobalStyle from "./Styles/GlobalStyles";
import HomePage from "./pages/HomePage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <HomePage />
    </QueryClientProvider>
  );
};

export default App;
