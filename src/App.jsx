import { lazy, Suspense } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/home_page"));
const AboutPage = lazy(() => import("./pages/about_page"));
const ContactPage = lazy(() => import("./pages/contact_page"));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
