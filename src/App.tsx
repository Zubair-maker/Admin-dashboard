import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/customer" element={<Customers />} />
            <Route path="admin/product" element={<Product />} />
            <Route path="admin/transaction" element={<Transaction />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
