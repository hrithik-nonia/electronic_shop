import { lazy, Suspense } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home_page"));
const AboutPage = lazy(() => import("./pages/about_page"));
const ContactPage = lazy(() => import("./pages/contact_page"));
const FAQHelpCenter = lazy(() => import("./pages/help_center_page"));
const SearchOverlay = lazy(() => import("./pages/search_page"));
const Wishlist = lazy(() => import("./pages/wish_list_page"));
const AllProducts = lazy(() => import("./pages/all_product_page"));
const ComputerProducts = lazy(() => import("./pages/computer_product_page"));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<FAQHelpCenter />} />
          <Route path="/search" element={<SearchOverlay />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/computer-products" element={<ComputerProducts />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
