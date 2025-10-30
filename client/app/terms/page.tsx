import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
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
              <p className="text-gray-700 leading-relaxed">
                Welcome to the Africa Alliance for Health Research and Economic Development (AAHRED) 
                website. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, 
                services, and programs. By accessing or using our services, you agree to be bound by these 
                Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using AAHRED&apos;s website and services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. These Terms apply 
                to all visitors, users, and others who access or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Your continued use of our services 
                after any such changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            {/* Use of Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Use of Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AAHRED provides entrepreneurship training, business development support, water health 
                initiatives, and various economic empowerment programs. You agree to use our services only 
                for lawful purposes and in accordance with these Terms.
              </p>
              <div className="ml-6 space-y-2">
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold">You agree not to:</span>
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-700">
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>Submit false or misleading information</li>
                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                </ul>
              </div>
            </section>

            {/* Programs and Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Programs and Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AAHRED offers various programs including entrepreneurship training, SME support, digital 
                inclusion initiatives, and economic prosperity platforms. Participation in these programs 
                may be subject to additional terms and eligibility requirements.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any program or service at any time 
                without prior notice. We are not liable for any modification, suspension, or discontinuation 
                of any program or service.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on the AAHRED website, including but not limited to text, graphics, logos, 
                images, and software, is the property of AAHRED or its content suppliers and is protected 
                by Kenyan and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                or exploit any of our content without our prior written permission.
              </p>
            </section>

            {/* User Contributions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. User Contributions
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit content, feedback, or information to AAHRED through our website or programs, 
                you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, 
                reproduce, modify, and distribute such content for the purposes of operating and promoting 
                our organization and programs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You represent and warrant that you own or have the necessary rights to any content you 
                submit and that such content does not violate any third-party rights.
              </p>
            </section>

            {/* Privacy and Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Privacy Policy
                </a>{" "}
                to understand how we collect, use, and protect your personal information. By using our 
                services, you consent to our collection and use of your information as described in our 
                Privacy Policy.
              </p>
            </section>

            {/* Disclaimer of Warranties */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, 
                either express or implied. AAHRED does not warrant that our services will be uninterrupted, 
                error-free, or secure.
              </p>
              <p className="text-gray-700 leading-relaxed">
                While we strive to provide accurate and helpful information through our programs, we make 
                no guarantees regarding the outcomes of participation in our programs or the success of any 
                business ventures undertaken based on information or training received through AAHRED.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, AAHRED shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
                whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
                intangible losses resulting from your use of our services.
              </p>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Indemnification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless AAHRED, its officers, directors, employees, 
                and agents from and against any claims, liabilities, damages, losses, and expenses, including 
                reasonable legal fees, arising out of or in any way connected with your access to or use of 
                our services or your violation of these Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Kenya, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms 
                or your use of our services shall be subject to the exclusive jurisdiction of the courts 
                of Kenya.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AAHRED reserves the right to modify or replace these Terms at any time at our sole discretion. 
                We will provide notice of any material changes by posting the new Terms on our website and 
                updating the &quot;Last updated&quot; date. Your continued use of our services after any changes 
                constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-blue-50 rounded-lg p-6 space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Africa Alliance for Health Research and Economic Development (AAHRED)</span>
                </p>
                <p className="text-gray-700">Nairobi, Kenya</p>
                <p className="text-gray-700">Email: info@aahred.org</p>
                <p className="text-gray-700">Phone: +254 XXX XXX XXX</p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 italic">
                By using AAHRED&apos;s services, you acknowledge that you have read, understood, and agree to 
                be bound by these Terms of Service.
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
