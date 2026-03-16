import { ReactNode } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppWidget from "./WhatsAppWidget";
import BackToTop from "./BackToTop";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <WhatsAppWidget />
    <BackToTop />
  </div>
);

export default Layout;
