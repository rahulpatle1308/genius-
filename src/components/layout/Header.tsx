import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown, MessageCircle, ChevronRight, Home, Info, Briefcase, FolderOpen, PenSquare, Phone as PhoneIcon, X, Monitor, Smartphone, Camera, CreditCard, Mic, UserCircle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import GeniusLogo from "@/assets/Genius-logo.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const services = [
  { name: "Creative Designing", href: "/services/creative-designing", icon: "🎨", lucideIcon: Monitor },
  { name: "Offset Printing", href: "/services/offset-printing", icon: "🖨️", lucideIcon: CreditCard },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: "🌐", lucideIcon: Smartphone },
  { name: "LED Board Solutions", href: "/services/led-boards", icon: "💡", lucideIcon: Camera },
  { name: "Mobile App Development", href: "/services/mobile-app-development", icon: "📱", lucideIcon: Smartphone },
  { name: "SEO Services", href: "/services/seo-services", icon: "🔍", lucideIcon: PenSquare },
];

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", hasDropdown: true, icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: FolderOpen },
  { name: "Founder", href: "/founder", icon: UserCircle },
  { name: "Blog", href: "/blog", icon: PenSquare },
  { name: "Contact", href: "/contact", icon: PhoneIcon },
];

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
  }),
};

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
          {/* <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="text-xl md:text-2xl font-black text-white italic">G</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-background animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-foreground leading-none">
                Genius<span className="teal-gradient-text"> Pvt. Ltd.</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground leading-none">
                Creative Thinking Made Visual
              </span>
            </div>
          </Link> */}

    <Link to="/" className="group">
  <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden transition-transform group-hover:scale-105">
    
    <img
      src="/src/assets/Genius-logo.svg"
      alt="Logo"
      className="w-full h-full object-contain"
    />

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
            <ThemeToggle />
            <a
              href="tel:+919770034731"
              className="btn-outline-light text-xs inline-flex items-center gap-2"
            >
              <PhoneIcon size={14} />
              Call Now
            </a>
            <a
              href="https://wa.me/919770034731"
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
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <motion.button
                  className="p-2.5 rounded-xl bg-secondary text-foreground"
                  whileTap={{ scale: 0.9 }}
                >
                  <Menu size={22} />
                </motion.button>
              </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[340px] p-0 bg-background border-r border-border">
              <SheetHeader className="p-5 pb-4 border-b border-border">
                <SheetTitle className="text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/10">
                      <span className="text-lg font-black text-white italic">G</span>
                    </div>
                    <div>
                      <span className="text-lg font-extrabold tracking-tight text-foreground block leading-none">
                        Genius<span className="teal-gradient-text"> Pvt. Ltd.</span>
                      </span>
                      <p className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground leading-none mt-0.5">
                        Creative Thinking Made Visual
                      </p>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col py-3">
                {navLinks.map((link, index) =>
                  link.hasDropdown ? (
                    <motion.div
                      key={link.name}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={`w-full flex items-center gap-3 justify-between px-5 py-3.5 text-sm font-medium transition-all ${
                          location.pathname.startsWith("/services")
                            ? "text-primary bg-primary/5"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                              location.pathname.startsWith("/services")
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary text-muted-foreground"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <link.icon size={18} />
                          </motion.div>
                          Services
                        </div>
                        <motion.div
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={16} className="text-muted-foreground" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-secondary/20"
                          >
                            <Link
                              to="/services"
                              onClick={() => setSheetOpen(false)}
                              className="flex items-center gap-3 px-5 pl-[68px] py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ChevronRight size={14} />
                              All Services
                            </Link>
                            {services.map((s, si) => (
                              <motion.div
                                key={s.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: si * 0.04 }}
                              >
                                <Link
                                  to={s.href}
                                  onClick={() => setSheetOpen(false)}
                                  className="flex items-center gap-3 px-5 pl-[68px] py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  <s.lucideIcon size={16} className="text-primary/60" />
                                  {s.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={link.name}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={link.href}
                        onClick={() => setSheetOpen(false)}
                        className={`flex items-center gap-3 px-5 py-3.5 text-sm font-medium transition-all ${
                          location.pathname === link.href
                            ? "text-primary bg-primary/5"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <motion.div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                            location.pathname === link.href
                              ? "bg-primary/10 text-primary"
                              : "bg-secondary text-muted-foreground"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <link.icon size={18} />
                        </motion.div>
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                )}

                <div className="border-t border-border mt-4 pt-4 px-5 space-y-2.5">
                  <a
                    href="tel:+919770034731"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold border border-primary/20 text-primary bg-primary/5 transition-all hover:bg-primary/10"
                  >
                    <PhoneIcon size={16} /> Call Now
                  </a>
                  <a
                    href="https://wa.me/919770034731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn text-xs w-full justify-center"
                  >
                    <MessageCircle size={16} /> WhatsApp
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
      </div>
    </header>
  );
};

export default Header;
