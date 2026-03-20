import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const sections = [
  { title: "1. Introduction", content: "ENGPROOF (established 2025, Bhopal, India) is committed to protecting the privacy and security of your personal information. We adhere to the principles of confidentiality, integrity, and availability in all data processing activities. This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of your data when you engage our technology and security solutions.\n\nWe comply with applicable data protection laws, including the Indian Information Technology Act, 2000, and the General Data Protection Regulation (GDPR) where applicable to our international clients." },
  { title: "2. Information We Collect", content: "Personal Data: Full name, email address, phone number, company/organization name and job title, billing address and payment information (processed through secure gateways).\n\nBusiness and Project Data: Project requirements, technical specifications, documentation, CCTV installation site details, security plans, employee details, photographs, organizational data, attendee information.\n\nTechnical Data: IP address, browser type, device information, website usage analytics through cookies, server logs and access records." },
  { title: "3. Legal Basis for Processing", content: "Consent: Where you have explicitly agreed to processing.\nContractual Obligation: To perform our services under our engagement with you.\nLegal Requirement: To comply with applicable laws and regulatory obligations.\nLegitimate Interest: To improve our services, prevent fraud, and ensure network security." },
  { title: "4. How We Use Information", content: "We use your information to deliver and manage contracted services, communicate project updates and support information, process payments and maintain financial records, monitor and improve website performance, detect and address technical issues or security threats, and comply with legal obligations." },
  { title: "5. Data Sharing and Disclosure", content: "ENGPROOF does not sell, rent, or trade personal information. We may share data only with hosting providers (secure infrastructure partners), payment gateways (PCI-DSS compliant processors), cloud infrastructure partners (bound by confidentiality agreements), and legal authorities (when required by law)." },
  { title: "6. Data Security Measures", content: "We implement SSL/TLS encryption for all data in transit, firewall protection and intrusion detection systems, role-based access control (RBAC), data encryption at rest for sensitive information, regular security audits and vulnerability assessments, 24/7 system monitoring and incident response procedures, and strict confidentiality agreements with all personnel." },
  { title: "7. Data Retention", content: "We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, comply with legal requirements, and resolve disputes. After the retention period, data is securely deleted or anonymized." },
  { title: "8. Cookies Policy", content: "Our website uses cookies to analyze traffic, remember preferences, and ensure functionality. You may disable cookies through browser settings; however, this may affect website functionality." },
  { title: "9. Your Data Protection Rights", content: "Access: Request copies of your personal data.\nCorrection: Rectify inaccurate information.\nDeletion: Request erasure of your data (subject to legal obligations).\nObjection: Object to processing based on legitimate interests.\nWithdraw Consent: Where processing is based on consent." },
  { title: "10. Confidentiality Obligations", content: "All client project information is treated as strictly confidential. ENGPROOF and its personnel are bound by non-disclosure agreements and will not disclose any client data without explicit written authorization, except as required by law." },
  { title: "11. Children's Privacy", content: "Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors." },
  { title: "12. International Data Transfers", content: "Where data is transferred outside India, we ensure appropriate safeguards are in place, including standard contractual clauses in compliance with applicable data protection laws." },
  { title: "13. Updates to This Privacy Policy", content: "ENGPROOF reserves the right to update this Privacy Policy. The revised version will be posted on this page with an updated effective date." },
  { title: "14. Contact Information", content: "For privacy-related inquiries, data protection requests, or concerns:\nENGPROOF, Indore, Madhya Pradesh, India\n+91 74897 41225\nengproof25@gmail.com\nBusiness Hours: Mon-Sat 8:00 AM – 8:00 PM (Emergency support 24/7 for existing clients)" },
];

const PrivacyPolicy = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-4xl">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="teal-gradient-text">Privacy Policy</span>
          </h1>
          <p className="text-muted-foreground">Enterprise-grade data protection commitment: Confidentiality, Integrity, Availability</p>
          <p className="text-xs text-muted-foreground mt-2 mono-text">Effective Date: March 1, 2026 | Version 2.0</p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass-card p-6 md:p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <h2 className="text-lg font-extrabold text-foreground mb-4">{s.title}</h2>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{s.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
