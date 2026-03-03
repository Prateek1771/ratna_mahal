import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DesignersPage from "./pages/DesignersPage";
import GiftsPage from "./pages/GiftsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import WishlistPage from "./pages/WishlistPage";
import CategoryPage from "./pages/CategoryPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/designers" element={<DesignersPage />} />
              <Route path="/gifts" element={<GiftsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route path="/:slug" element={<CategoryPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </WishlistProvider>
  );
}
