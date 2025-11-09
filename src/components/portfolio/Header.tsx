import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { href: "#home", label: "Home", action: "scroll" },
    { href: "#services", label: "Services", action: "scroll" },
    { href: "#about", label: "About Me", action: "scroll" },
    { href: "#projects", label: "Highlights", action: "scroll" },
    { href: "#testimonials", label: "Reviews", action: "scroll" },
    { href: "#pricing", label: "Pricing", action: "scroll" },
    { href: "#hire", label: "Hire Me", action: "scroll" },
    { href: "/blogs", label: "Blog", action: "navigate" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (item: any) => {
    setIsOpen(false);
    if (item.action === "navigate") {
      navigate(item.href);
    } else if (item.action === "scroll") {
      if (isHomePage) {
        scrollToSection(item.href);
      } else {
        navigate("/");
        setTimeout(() => scrollToSection(item.href), 300);
      }
    }
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md"
      role="banner"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white font-sans uppercase"
          aria-label="Shreya Singh Portfolio Home"
        >
          {"Shreya Singh"}
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300 cursor-pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </motion.button>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full p-2 hover:bg-gray-400 dark:hover:bg-gray-200 transition-colors"
            aria-label="Toggle Dark/Light Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-black/90 py-4 shadow-md w-full flex flex-col items-center"
          aria-label="Mobile Navigation"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item)}
              whileTap={{ scale: 0.95 }}
              className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer w-full text-center"
            >
              {item.label}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
