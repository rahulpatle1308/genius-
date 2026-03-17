import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/30">
    <div className="container-wide mx-auto px-4 md:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <span className="text-2xl font-extrabold tracking-tight text-foreground">
              ENG<span className="teal-gradient-text">PROOF</span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground -mt-1">
              Secure. Develop. Innovate.
            </p>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enterprise technology and security solutions since 2025. Protecting and growing businesses across India.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.name}>
                <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Our Services</h4>
          <ul className="space-y-2.5">
            {[
              { name: "Website Development", href: "/services/website-development" },
              { name: "App Development", href: "/services/mobile-app-development" },
              { name: "CCTV & Security", href: "/services/cctv-security" },
              { name: "Digital ID Cards", href: "/services/digital-id-cards" },
              { name: "Event Management", href: "/services/event-management" },
            ].map((l) => (
              <li key={l.name}>
                <Link to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Phone size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="tel:+917489741225" className="hover:text-primary transition-colors">+91 74897 41225</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Mail size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:engproof25@gmail.com" className="hover:text-primary transition-colors">engproof25@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MessageCircle size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="https://wa.me/917489741225" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              Indore, Madhya Pradesh, India
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Clock size={15} className="text-primary mt-0.5 shrink-0" />
              <span>Mon-Sat: 8AM-8PM<br />Emergency: 24/7</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-border">
      <div className="container-wide mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <span>© 2025 ENGPROOF. All Rights Reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
