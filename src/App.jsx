import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import DesignersPage from "./pages/DesignersPage";
import GiftsPage from "./pages/GiftsPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/designers" element={<DesignersPage />} />
          <Route path="/gifts" element={<GiftsPage />} />
          <Route path="/:slug" element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
