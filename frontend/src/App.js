import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import IndustriesPage from "@/pages/Industries";
import PortfolioPage from "@/pages/Portfolio";
import ProcessPage from "@/pages/Process";
import BlogPage from "@/pages/Blog";
import CareersPage from "@/pages/Careers";
import ContactPage from "@/pages/Contact";
import PrivacyPage from "@/pages/Privacy";
import TermsPage from "@/pages/Terms";
import NotFoundPage from "@/pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
