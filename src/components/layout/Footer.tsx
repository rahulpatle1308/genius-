import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/30">
    <div className="container-wide mx-auto px-4 md:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/10">
              <span className="text-sm font-black text-white italic">G</span>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-foreground">
                Genius<span className="teal-gradient-text"> Pvt. Ltd.</span>
              </span>
              <p className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground -mt-0.5">
                Creative Thinking Made Visual
              </p>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            At Genius Pvt. Ltd., we transform ideas into powerful visual experiences. From creative graphic design to premium branding solutions — we help businesses grow with impactful design.
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
              { name: "Creative Designing", href: "/services/creative-designing" },
              { name: "Offset Printing", href: "/services/offset-printing" },
              { name: "Digital Marketing", href: "/services/digital-marketing" },
              { name: "LED Board Solutions", href: "/services/led-boards" },
              { name: "App Development", href: "/services/mobile-app-development" },
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
              <a href="tel:+919770034731" className="hover:text-primary transition-colors">+91 97700 34731</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Mail size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="mailto:nitin.deswadi@gmail.com" className="hover:text-primary transition-colors">nitin.deswadi@gmail.com</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MessageCircle size={15} className="text-primary mt-0.5 shrink-0" />
              <a href="https://wa.me/919770034731" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              184 LIG B Sector Rajeev Nagar Bhopal
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <Clock size={15} className="text-primary mt-0.5 shrink-0" />
              <span>Mon-Sat: 10AM-8PM<br />Bhopal, MP</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-border">
      <div className="container-wide mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <span>© 2026 Genius Pvt. Ltd. All Rights Reserved.</span>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
