import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/LandingPage";
import LoginPage from "../pages/login/LoginPage";
import PublicLayout from "../layouts/PublicLayout";
import Summarizer from "../pages/summarizer/Summarizer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/summarizer" element={<Summarizer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
