import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import { QueryClient, QueryClientProvider } from "react-query";
import OrderProvider from "./store/OrderProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <OrderProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </Layout>
        </QueryClientProvider>
      </OrderProvider>
    </div>
  );
}

export default App;
