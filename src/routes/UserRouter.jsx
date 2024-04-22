import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/client/HomePage";
import AbouPage from "../pages/client/AbouPage";
import ContactPage from "../pages/client/ContactPage";
import SupportPage from "../pages/client/SupportPage";
import ProductsPage from "../pages/client/ProductsPage";
import ProductDetailsPage from "../pages/client/ProductDetailsPage";
import LogInPage from "../pages/client/LogInPage";
import SignUpPage from "../pages/client/SignUpPage";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AbouPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="support" element={<SupportPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="product/:id" element={<ProductDetailsPage />} />
      <Route path="log-in" element={<LogInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default UserRouter;
