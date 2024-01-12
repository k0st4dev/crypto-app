import { QueryClient, QueryClientProvider } from "react-query";
import ExchangeRate from "./components/ExchangeRate";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      method:"GET",
      refetchOnWindowFocus:false,
      refetchInterval:60000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExchangeRate />
    </QueryClientProvider>
  );
}

export default App;
