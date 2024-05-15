import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import BankInformation from "./pages/BankPage/bank-information";
import TestimonyPage from "./pages/TestimonyPage/TestimonyPage";
import TestimonyDetailPage from "./pages/TestimonyDetailPage/TestimonyDetailPage";
import MuseumsListPage from "./pages/MuseumsListPage/MuseumsListPage";
import ManifestoPage from "./pages/ManifestoPage/ManifestoPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank-information" element={<BankInformation />} />
        <Route path="/TestimonyPage" element={<TestimonyPage />} />
        <Route path="/TestimonyDetailPage" element={<TestimonyDetailPage />} />
        <Route path="/MuseumsListPage" element={<MuseumsListPage />} />
        <Route path="/ManifestoPage" element={<ManifestoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
