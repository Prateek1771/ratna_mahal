import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import PromoBanner from "./PromoBanner";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";
import EmailSignup from "./EmailSignup";
import Footer from "./Footer";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [gender, setGender] = useState("women");
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header gender={gender} onGenderChange={setGender} />
      <MobileHeader gender={gender} onMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        gender={gender}
        onGenderChange={setGender}
      />

      <main className="flex-1">
        <Outlet />
      </main>

      <EmailSignup />
      <Footer />
    </div>
  );
}
