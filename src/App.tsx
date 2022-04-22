import { PrivateOutlet } from "components/Outlet";
import { DashboardPage } from "pages/Home";
import { LoginPage } from "pages/Login";
import { PaymentPage } from "pages/Payments";
import { ProductsPage } from "pages/Products";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<PrivateOutlet />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/payments" element={<PaymentPage />} />
      </Route>
    </Routes>
  );
}
