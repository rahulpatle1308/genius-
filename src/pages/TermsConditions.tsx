import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using ENGPROOF's services, website, or any associated platforms, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services." },
  { title: "2. Service Descriptions", content: "ENGPROOF provides technology and security services including website development, mobile app development, CCTV installation and maintenance, digital ID card services, and event management. Specific deliverables, timelines, and pricing are outlined in individual project proposals and agreements." },
  { title: "3. Payment Terms", content: "Payment terms are specified in individual project agreements. Generally, a 50% advance payment is required before project commencement, with the remaining 50% due upon completion. All payments are in Indian Rupees (INR) unless otherwise agreed. Late payments may incur interest charges." },
  { title: "4. Cancellation and Refund Policy", content: "Cancellation requests must be submitted in writing. Refunds are processed based on work completed. If cancellation occurs before project commencement, a full refund (minus processing fees) will be issued. After commencement, refunds are prorated based on work delivered." },
  { title: "5. Intellectual Property", content: "Upon full payment, the client receives ownership rights to the final deliverables. ENGPROOF retains the right to use project work in its portfolio unless otherwise agreed. Third-party tools, frameworks, and libraries used remain under their respective licenses." },
  { title: "6. Confidentiality", content: "Both parties agree to maintain strict confidentiality of all proprietary information shared during the engagement. Non-disclosure agreements (NDAs) are available upon request and are mandatory for projects involving sensitive data." },
  { title: "7. Warranty and Support", content: "ENGPROOF provides a 30-day warranty period after project delivery for bug fixes and minor adjustments. Extended support and maintenance packages are available at additional cost. Hardware warranties (CCTV equipment) follow manufacturer terms." },
  { title: "8. Limitation of Liability", content: "ENGPROOF's total liability for any claim arising from services shall not exceed the total amount paid by the client for that specific service. ENGPROOF is not liable for indirect, incidental, or consequential damages." },
  { title: "9. Client Responsibilities", content: "Clients are responsible for providing accurate information, timely feedback, and necessary access/credentials required for project completion. Delays caused by the client may result in revised timelines and additional charges." },
  { title: "10. Governing Law", content: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh." },
  { title: "11. Dispute Resolution", content: "In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If unresolved, the dispute shall be referred to mediation before pursuing legal remedies." },
  { title: "12. Modifications", content: "ENGPROOF reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on this page with a revised effective date." },
  { title: "13. Contact Information", content: "For questions about these Terms and Conditions:\nENGPROOF, Indore, Madhya Pradesh, India\n+91 74897 41225\nengproof25@gmail.com" },
];

const TermsConditions = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-4xl">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="teal-gradient-text">Terms & Conditions</span>
          </h1>
          <p className="text-muted-foreground">Please read these terms carefully before using our services</p>
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

export default TermsConditions;
