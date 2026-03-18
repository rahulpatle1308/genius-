import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, MessageCircle, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="glass-header">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="ENGPROOF Logo" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-foreground leading-none">
                ENG<span className="teal-gradient-text">PROOF</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground leading-none">
                Protect Solution
              </span>
            </div>
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
                          className="absolute top-full left-0 mt-1 w-64 py-2 rounded-xl bg-card border border-border shadow-xl"
                        >
                          <Link
                            to="/services"
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="h-px bg-border mx-3 my-1" />
                          {services.map((s) => (
                            <Link
                              key={s.name}
                              to={s.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
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

          {/* Mobile - Sheet from left */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-foreground">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 bg-background">
              <SheetHeader className="p-6 pb-4 border-b border-border">
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="ENGPROOF Logo" className="h-10 w-auto" />
                    <div>
                      <span className="text-lg font-extrabold tracking-tight text-foreground block leading-none">
                        ENG<span className="teal-gradient-text">PROOF</span>
                      </span>
                      <p className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5">
                        Protect Solution
                      </p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col py-4">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-colors ${
                          location.pathname.startsWith("/services")
                            ? "text-primary bg-primary/5"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        Services
                        <ChevronDown
                          size={16}
                          className={`text-muted-foreground transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-secondary/30"
                          >
                            <Link
                              to="/services"
                              onClick={() => setSheetOpen(false)}
                              className="flex items-center gap-3 px-8 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ChevronRight size={14} />
                              All Services
                            </Link>
                            {services.map((s) => (
                              <Link
                                key={s.name}
                                to={s.href}
                                onClick={() => setSheetOpen(false)}
                                className="flex items-center gap-3 px-8 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                <span className="text-base">{s.icon}</span>
                                {s.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={`px-6 py-3.5 text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/5 border-r-2 border-primary"
                          : "text-foreground hover:bg-secondary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}

                <div className="border-t border-border mt-4 pt-4 px-6 space-y-3">
                  <a
                    href="https://wa.me/917489741225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn text-xs w-full justify-center"
                  >
                    <MessageCircle size={16} /> Chat Now
                  </a>
                  <Link
                    to="/contact"
                    className="btn-teal text-xs w-full text-center block"
                    onClick={() => setSheetOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
