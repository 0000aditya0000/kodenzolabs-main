import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "../ui/sonner";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
