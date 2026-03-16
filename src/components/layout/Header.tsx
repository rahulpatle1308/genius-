import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Website Development", href: "/services/website-development", icon: "📘" },
  { name: "Mobile App Development", href: "/services/mobile-app-development", icon: "📱" },
  { name: "CCTV & Security", href: "/services/cctv-security", icon: "🔒" },
  { name: "Digital ID Cards", href: "/services/digital-id-cards", icon: "🆔" },
  { name: "Event Management", href: "/services/event-management", icon: "🎤" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="glass-header">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground">
              ENG<span className="text-primary">PROOF</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground -mt-1">
              Secure. Develop. Innovate.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-64 py-2 rounded-xl glass-card shadow-2xl"
                        >
                          <Link
                            to="/services"
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="h-px bg-border mx-3 my-1" />
                          {services.map((s) => (
                            <Link
                              key={s.name}
                              to={s.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                            >
                              <span>{s.icon}</span>
                              {s.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/917489741225"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-xs"
            >
              <MessageCircle size={16} />
              Chat Now
            </a>
            <Link to="/contact" className="btn-teal text-xs">
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <Link
                      to="/services"
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg"
                    >
                      Services
                    </Link>
                    <div className="pl-6 space-y-1">
                      {services.map((s) => (
                        <Link
                          key={s.name}
                          to={s.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {s.icon} {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg"
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="flex gap-3 pt-4">
                <a href="https://wa.me/917489741225" target="_blank" rel="noopener noreferrer" className="whatsapp-btn text-xs flex-1 justify-center">
                  <MessageCircle size={16} /> Chat Now
                </a>
                <Link to="/contact" className="btn-teal text-xs flex-1 text-center" onClick={() => setMobileOpen(false)}>
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
