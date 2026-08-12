import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – ColorSpark",
  description: "Privacy Policy for the ColorSpark color-by-number game app.",
};

const LAST_UPDATED = "July 26, 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#eef7ff] to-[#f0fff4] py-16 px-4 text-center border-b border-gray-100">
        <div className="text-5xl mb-4">🔒</div>
        <h1 className="text-4xl sm:text-5xl font-black text-gray-800 mb-3">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 prose prose-gray max-w-none">

          <div className="bg-[#eef7ff] border border-[#34AADC]/20 rounded-2xl p-5 mb-8">
            <p className="text-sm text-[#34AADC] font-semibold m-0">
              📋 <strong>Summary:</strong> ColorSpark is designed for children and takes privacy very seriously. We do not collect personal information from users. The app functions entirely offline. This policy explains what minimal data is stored locally on your device.
            </p>
          </div>

          <Section title="1. About ColorSpark" color="#FF5E5E">
            <p>ColorSpark (&quot;the App&quot;, &quot;we&quot;, &quot;our&quot;) is a color-by-number game developed for iOS and Android devices. This Privacy Policy explains how we handle information in connection with your use of the App.</p>
            <p>ColorSpark is intended for users of all ages, including children. We are committed to protecting the privacy of all our users, especially children.</p>
          </Section>

          <Section title="2. Information We Do Not Collect" color="#FF9500">
            <p>ColorSpark does <strong>not</strong> collect, transmit, or store any of the following:</p>
            <ul>
              <li>Personal information (name, email address, phone number)</li>
              <li>Location data (GPS or approximate location)</li>
              <li>Device identifiers (advertising ID, IDFA, GAID)</li>
              <li>Usage analytics or behavioral data</li>
              <li>Photos, camera, or microphone data</li>
              <li>Contacts or social data</li>
              <li>Financial or payment information</li>
            </ul>
            <p>The App does <strong>not</strong> require an account or registration of any kind.</p>
          </Section>

          <Section title="3. Data Stored Locally on Your Device" color="#FFD700">
            <p>ColorSpark stores the following data <strong>locally on your device only</strong> using AsyncStorage. This data never leaves your device and is never transmitted to us or any third party:</p>
            <ul>
              <li><strong>Game progress:</strong> Which levels you have completed and your scores</li>
              <li><strong>Sound preference:</strong> Whether you have enabled or disabled sound effects</li>
              <li><strong>App settings:</strong> Any in-app preferences you have configured</li>
            </ul>
            <p>This data is used solely to save your progress and preferences between sessions. You can delete this data at any time by uninstalling the App.</p>
          </Section>

          <Section title="4. Internet & Network Access" color="#4CD964">
            <p>ColorSpark is an <strong>offline-first application</strong>. All game content — images, sounds, and game logic — is bundled within the App itself. No internet connection is required to play.</p>
            <p>The App may request local network access on iOS to support the Expo development server during development builds. Production builds distributed through the App Store do not require network access.</p>
          </Section>

          <Section title="5. Children's Privacy (COPPA)" color="#34AADC">
            <p>ColorSpark complies with the Children's Online Privacy Protection Act (COPPA) and similar international children's privacy laws.</p>
            <p>We do not knowingly collect personal information from children under the age of 13. Since we collect no personal data from any user, there is nothing specific to children that we collect, process, or disclose.</p>
            <p>Parents and guardians can feel confident that ColorSpark does not:</p>
            <ul>
              <li>Show behaviorally targeted advertising</li>
              <li>Include in-app purchases</li>
              <li>Connect children to social networks</li>
              <li>Share any data with third parties</li>
            </ul>
          </Section>

          <Section title="6. Third-Party Services" color="#9B59B6">
            <p>ColorSpark does not integrate any of the following:</p>
            <ul>
              <li>Advertising networks or ad SDKs</li>
              <li>Analytics services (e.g., Firebase Analytics, Mixpanel)</li>
              <li>Social login or social media SDKs</li>
              <li>Crash reporting services that transmit device data</li>
            </ul>
            <p>The App is built with Expo / React Native. The Expo framework may include standard platform APIs, none of which transmit personal data from production builds.</p>
          </Section>

          <Section title="7. Security" color="#FF5E5E">
            <p>Since we do not collect or transmit any personal data, there is no personal data at risk of being breached. All data stored locally on your device is protected by your device&apos;s built-in security mechanisms (iOS Keychain, Android Keystore).</p>
            <p>We encourage you to keep your device software up to date to benefit from the latest security patches.</p>
          </Section>

          <Section title="8. Changes to This Policy" color="#FF9500">
            <p>We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last Updated&quot; date at the top of this page. We encourage you to review this policy periodically.</p>
            <p>Continued use of the App after any changes constitutes your acceptance of the updated policy. If you do not agree with any changes, please discontinue use of the App.</p>
          </Section>

          <Section title="9. Contact Us" color="#34AADC">
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <div className="bg-gray-50 rounded-2xl p-5 mt-3">
              <p className="m-0 font-semibold text-gray-700">ColorSpark Support</p>
              <p className="m-0 text-gray-500">Email: <a href="mailto:support@colorspark.app" className="text-[#34AADC] hover:underline">support@colorspark.app</a></p>
            </div>
            <p>We aim to respond to all inquiries within 5 business days.</p>
          </Section>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#FF6B35] font-bold hover:underline">← Back to Home</Link>
          <span className="mx-4 text-gray-300">|</span>
          <Link href="/terms" className="text-[#9B59B6] font-bold hover:underline">Terms & Conditions →</Link>
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
      <div className="text-gray-600 leading-relaxed space-y-3 text-sm">{children}</div>
    </div>
  );
}
