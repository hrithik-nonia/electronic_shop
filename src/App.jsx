import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home_page";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
