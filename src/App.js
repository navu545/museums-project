import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import BankInformation from "./pages/BankPage/bank-information";
import TestimonyPage from "./pages/TestimonyPage/TestimonyPage";
import TestimonyDetailPage from "./pages/TestimonyDetailPage/TestimonyDetailPage";
import MuseumsListPage from "./pages/MuseumsListPage/MuseumsListPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bank-information" element={<BankInformation />} />
        <Route path="/TestimonyPage" element={<TestimonyPage />} />
        <Route path="/TestimonyDetailPage" element={<TestimonyDetailPage />} />
        <Route path="/MuseumsListPage" element={<MuseumsListPage />} />
      </Routes>
    </Router>
  );
};

export default App;
