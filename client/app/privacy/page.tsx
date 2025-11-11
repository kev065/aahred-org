import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: October 31, 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Africa Alliance for Health Research and Economic Development (AAHRED) is committed to 
                protecting your privacy and ensuring the security of your personal information. This Privacy 
                Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or participate in our programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge 
                that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.1 Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                <li>Register for our programs or services</li>
                <li>Fill out forms on our website</li>
                <li>Contact us via email, phone, or contact forms</li>
                <li>Subscribe to our newsletters or communications</li>
                <li>Participate in surveys, workshops, or events</li>
                <li>Apply for entrepreneurship training or business support</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Demographic information (age, gender, location)</li>
                <li>Business information (business name, industry, size)</li>
                <li>Educational and professional background</li>
                <li>Financial information (for loan applications or funding requests)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Click patterns and website navigation</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AAHRED uses the collected information for various purposes, including:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Providing and managing our programs and services</li>
                <li>Processing applications for training, support, and funding</li>
                <li>Communicating with you about our programs, events, and opportunities</li>
                <li>Sending newsletters and updates (with your consent)</li>
                <li>Improving our website, programs, and services</li>
                <li>Conducting research and analysis to better serve our community</li>
                <li>Evaluating the impact and effectiveness of our programs</li>
                <li>Complying with legal obligations and regulations</li>
                <li>Protecting against fraud and security threats</li>
                <li>Facilitating partnerships and connections with relevant stakeholders</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. How We Share Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AAHRED respects your privacy and does not sell your personal information. We may share your 
                information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.1 With Your Consent
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information when you have given us explicit permission to do so.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.2 Service Providers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with third-party service providers who perform services on our 
                behalf, such as website hosting, data analysis, email delivery, and program administration. 
                These providers are contractually bound to protect your information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.3 Partner Organizations
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share information with partner organizations, financial institutions, and government 
                agencies when necessary to deliver our programs, facilitate funding opportunities, or comply 
                with program requirements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                4.4 Legal Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information when required by law, court order, or governmental request, 
                or when necessary to protect our rights, property, or safety, or that of others.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AAHRED implements appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                <li>Encryption of sensitive data</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data protection</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Data Retention
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our 
                agreements. When information is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><span className="font-semibold">Access:</span> You can request access to the personal information we hold about you</li>
                <li><span className="font-semibold">Correction:</span> You can request correction of inaccurate or incomplete information</li>
                <li><span className="font-semibold">Deletion:</span> You can request deletion of your personal information, subject to legal requirements</li>
                <li><span className="font-semibold">Objection:</span> You can object to the processing of your information in certain circumstances</li>
                <li><span className="font-semibold">Restriction:</span> You can request restriction of processing of your information</li>
                <li><span className="font-semibold">Portability:</span> You can request transfer of your information to another organization</li>
                <li><span className="font-semibold">Withdraw consent:</span> You can withdraw consent for marketing communications at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                Cookies are small data files stored on your device that help us understand how you use our 
                website and improve our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies for:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
                <li>Essential website functionality</li>
                <li>Remembering your preferences</li>
                <li>Analyzing website traffic and usage patterns</li>
                <li>Improving user experience</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling cookies 
                may limit your ability to use certain features of our website.
              </p>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Third-Party Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party websites you visit.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If we become aware that we have collected information from 
                a child without parental consent, we will take steps to delete that information.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be transferred to and processed in countries other than Kenya. When we 
                transfer information internationally, we ensure appropriate safeguards are in place to protect 
                your data in accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AAHRED reserves the right to update this Privacy Policy at any time. We will notify you of 
                any material changes by posting the new Privacy Policy on our website and updating the 
                &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any 
                changes. Your continued use of our services after changes constitutes acceptance of the 
                updated Privacy Policy.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Africa Alliance for Health Research and Economic Development (AAHRED)</span>
                </p>
                <p className="text-gray-700">Privacy Officer</p>
                <p className="text-gray-700">Nairobi, Kenya</p>
                <p className="text-gray-700">Email: info@aahred.org</p>
                {/* <p className="text-gray-700">Phone: +254 XXX XXX XXX</p> */}
              </div>
            </section>

            {/* Compliance */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                14. Compliance with Kenyan Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy is designed to comply with the Data Protection Act of Kenya and other 
                applicable data protection laws and regulations. AAHRED is committed to handling personal 
                information in accordance with the highest standards of privacy protection.
              </p>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 italic">
                By using AAHRED&apos;s services, you acknowledge that you have read, understood, and agree to 
                this Privacy Policy and the collection, use, and disclosure of your information as described 
                herein.
              </p>
            </section>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
