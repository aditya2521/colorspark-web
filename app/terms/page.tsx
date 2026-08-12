import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions – ColorSpark",
  description: "Terms and Conditions for using the ColorSpark color-by-number game app.",
};

const LAST_UPDATED = "July 26, 2026";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#f7f0ff] to-[#fff6ea] py-16 px-4 text-center border-b border-gray-100">
        <div className="text-5xl mb-4">📋</div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-800 mb-3">Terms &amp; Conditions</h1>
        <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">

          <div className="bg-[#f7f0ff] border border-[#9B59B6]/20 rounded-2xl p-5 mb-8">
            <p className="text-sm text-[#9B59B6] font-semibold m-0">
              📌 <strong>Please read these Terms carefully.</strong> By downloading or using ColorSpark, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the App.
            </p>
          </div>

          <Section title="1. Acceptance of Terms" color="#FF5E5E">
            <p>These Terms and Conditions (&quot;Terms&quot;) govern your use of the ColorSpark mobile application (&quot;App&quot;) operated by ColorSpark (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing or using the App, you agree to these Terms. If you are using the App on behalf of a minor, you (the parent or guardian) agree to these Terms on behalf of that minor.</p>
          </Section>

          <Section title="2. License to Use the App" color="#FF9500">
            <p>We grant you a limited, non-exclusive, non-transferable, revocable license to download and use ColorSpark for personal, non-commercial purposes on a device you own or control, in accordance with these Terms.</p>
            <p>You may not:</p>
            <ul>
              <li>Copy, modify, or create derivative works of the App</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
              <li>Sell, resell, transfer, or sublicense the App</li>
              <li>Use the App for any commercial purpose without our written consent</li>
              <li>Remove any copyright or proprietary notices from the App</li>
            </ul>
          </Section>

          <Section title="3. Eligibility & Parental Consent" color="#FFD700">
            <p>ColorSpark is suitable for users of all ages. The App is specifically designed to be safe for children and does not contain inappropriate content, in-app purchases, advertising, or social features.</p>
            <p>If you are under 13 years of age, please ensure a parent or guardian has reviewed and agreed to these Terms before you use the App. Parents and guardians are responsible for monitoring their child&apos;s use of the App.</p>
          </Section>

          <Section title="4. Intellectual Property" color="#4CD964">
            <p>All content within the App — including but not limited to artwork, images, sounds, graphics, user interface elements, and the ColorSpark name and logo — is owned by or licensed to us and is protected by copyright, trademark, and other intellectual property laws.</p>
            <p>You retain no intellectual property rights in the App content by virtue of using the App. You may not use our trademarks, logos, or brand elements without prior written permission.</p>
          </Section>

          <Section title="5. User Conduct" color="#34AADC">
            <p>ColorSpark is an offline single-player game. By using the App, you agree to:</p>
            <ul>
              <li>Use the App only for lawful purposes and in accordance with these Terms</li>
              <li>Not attempt to hack, exploit, or disrupt the App in any way</li>
              <li>Not use any automated means to access or manipulate the App</li>
              <li>Not use the App in a manner that could damage, disable, or impair it</li>
            </ul>
          </Section>

          <Section title="6. Disclaimer of Warranties" color="#9B59B6">
            <p>The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind, either express or implied, including but not limited to:</p>
            <ul>
              <li>Implied warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties that the App will be uninterrupted, error-free, or free of viruses</li>
              <li>Warranties regarding the accuracy or reliability of any content in the App</li>
            </ul>
            <p>We do not warrant that defects in the App will be corrected, or that the App or its servers are free of viruses or other harmful components.</p>
          </Section>

          <Section title="7. Limitation of Liability" color="#FF5E5E">
            <p>To the maximum extent permitted by applicable law, in no event shall ColorSpark, its developers, officers, employees, or affiliates be liable for:</p>
            <ul>
              <li>Any indirect, incidental, special, consequential, or punitive damages</li>
              <li>Loss of profits, data, goodwill, or other intangible losses</li>
              <li>Damages arising from your use or inability to use the App</li>
              <li>Any unauthorized access to or alteration of your data</li>
            </ul>
            <p>Our total liability to you for all claims arising from the use of the App shall not exceed the amount you paid (if any) to download the App in the past 12 months.</p>
          </Section>

          <Section title="8. App Updates & Availability" color="#FF9500">
            <p>We reserve the right to modify, suspend, or discontinue the App or any part of it at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the App.</p>
            <p>We may release updates to the App from time to time to improve functionality, fix bugs, or add new features. We encourage you to keep the App updated to the latest version.</p>
          </Section>

          <Section title="9. Third-Party Platforms" color="#4CD964">
            <p>The App is distributed through the Apple App Store and Google Play Store. Your use of these platforms is subject to their respective terms of service:</p>
            <ul>
              <li><a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html" target="_blank" rel="noopener noreferrer" className="text-[#34AADC] hover:underline">Apple App Store Terms of Service</a></li>
              <li><a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer" className="text-[#34AADC] hover:underline">Google Play Terms of Service</a></li>
            </ul>
            <p>We are not responsible for any issues arising from your use of these third-party platforms.</p>
          </Section>

          <Section title="10. Governing Law" color="#34AADC">
            <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.</p>
          </Section>

          <Section title="11. Changes to These Terms" color="#9B59B6">
            <p>We reserve the right to update or modify these Terms at any time. When we do, we will update the &quot;Last Updated&quot; date at the top of this page. Your continued use of the App after any changes constitutes your acceptance of the revised Terms.</p>
            <p>We encourage you to review these Terms periodically to stay informed of any changes. If you do not agree to the revised Terms, please discontinue use of the App.</p>
          </Section>

          <Section title="12. Contact Us" color="#FF5E5E">
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="bg-gray-50 rounded-2xl p-5 mt-3">
              <p className="font-semibold text-gray-700 m-0">ColorSpark Support</p>
              <p className="text-gray-500 m-0">Email: <a href="mailto:support@colorspark.app" className="text-[#34AADC] hover:underline">support@colorspark.app</a></p>
            </div>
            <p>We aim to respond to all inquiries within 5 business days.</p>
          </Section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/privacy" className="text-[#34AADC] font-bold hover:underline">← Privacy Policy</Link>
          <span className="mx-4 text-gray-300">|</span>
          <Link href="/" className="text-[#FF6B35] font-bold hover:underline">Back to Home →</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-black mb-4 flex items-center gap-2" style={{ color }}>
        <span className="w-1 h-7 rounded-full inline-block" style={{ background: color }} />
        {title}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-3 text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-[#34AADC] [&_a]:hover:underline">{children}</div>
    </div>
  );
}
