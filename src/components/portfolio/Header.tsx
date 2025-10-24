import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { href: "#home", label: "Home", isRoute: false },
    { href: "#services", label: "Services", isRoute: false },
    { href: "#about", label: "About Me", isRoute: false },
    { href: "#projects", label: "Highlights", isRoute: false },
    { href: "#testimonials", label: "Reviews", isRoute: false },
    { href: "#pricing", label: "Pricing", isRoute: false },
    { href: "#hire", label: "Hire Me", isRoute: false },
    { href: "/blogs", label: "Blog", isRoute: true },
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
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
            setIsOpen(false);
          }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white font-sans uppercase"
          aria-label="Shreya Singh Portfolio Home"
        >
          {"Shreya Singh"}
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Primary Navigation">
          {navItems.map((item) => (
            item.isRoute ? (
              <Link key={item.href} to={item.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300 cursor-pointer inline-block"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.span>
              </Link>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== '/') {
                    window.location.href = '/' + item.href;
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300 cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            )
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
            item.isRoute ? (
              <Link key={item.href} to={item.href} className="w-full">
                <motion.span
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer w-full text-center"
                >
                  {item.label}
                </motion.span>
              </Link>
            ) : (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    if (location.pathname !== '/') {
                      window.location.href = '/' + item.href;
                    } else {
                      scrollToSection(item.href);
                    }
                  }, 300);
                }}
                whileTap={{ scale: 0.95 }}
                className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer w-full text-center"
              >
                {item.label}
              </motion.a>
            )
          ))}
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
