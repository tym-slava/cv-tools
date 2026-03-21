import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: March 21, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          onCV.link is operated by an individual based in Bulgaria, European Union. This Privacy
          Policy explains what personal data we collect, why we collect it, how it is used, and your
          rights under the General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Data Controller</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          The data controller is the individual operator of onCV.link. You can contact us at:{" "}
          <a href="mailto:oncvlink@gmail.com" className="text-blue-500 hover:underline">
            oncvlink@gmail.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. What Data We Collect</h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          <strong className="text-gray-700 dark:text-gray-300">We collect</strong> only the data
          you voluntarily submit through the &quot;Suggest a Feature&quot; form:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-6 text-gray-600 dark:text-gray-400">
          <li>Full name</li>
          <li>Email address</li>
          <li>Your feature idea / message</li>
        </ul>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          <strong className="text-gray-700 dark:text-gray-300">We do NOT collect:</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            CV content (personal information, work history, education, skills) — this data is stored
            exclusively in your browser&apos;s local storage and is never transmitted to our
            servers.
          </li>
          <li>Location data, device identifiers, or behavioural tracking data.</li>
          <li>
            Any data via cookies or analytics scripts — we do not use tracking or advertising
            cookies.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Legal Basis for Processing (GDPR Art. 6)</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          When you submit the &quot;Suggest a Feature&quot; form, the legal basis for processing
          your personal data is your <strong>consent</strong> — you voluntarily fill in and submit
          the form. You may withdraw consent at any time by contacting us to have your data deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. How We Use Your Data</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Form submissions are used solely to read and consider product improvement ideas. We do not
          use them for marketing, profiling, automated decision-making, or any purpose other than
          improving the service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Third-Party Processors</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Form submission data is transmitted to and stored in Google Sheets via Google Apps Script,
          a service provided by Google LLC. Google acts as a data processor on our behalf. Their
          privacy practices are described at{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            policies.google.com/privacy
          </a>
          .
          <br />
          <br />
          We do not share your data with any other third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Form submission data is retained in Google Sheets until you request deletion. To request
          deletion, contact us at{" "}
          <a href="mailto:oncvlink@gmail.com" className="text-blue-500 hover:underline">
            oncvlink@gmail.com
          </a>{" "}
          and we will remove your data within 30 days.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Cookies</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          onCV.link does not use analytics cookies, advertising cookies, or any third-party tracking
          scripts. The site may set technically necessary cookies inherent to the Next.js framework;
          these do not contain personal data and are not used for tracking or profiling.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Your Privacy Rights</h2>
        <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
          Regardless of where you are located, you have the following rights regarding your personal
          data:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <strong className="text-gray-700 dark:text-gray-300">Access</strong> — request a copy
            of the personal data we hold about you.
          </li>
          <li>
            <strong className="text-gray-700 dark:text-gray-300">Rectification</strong> — ask us to
            correct inaccurate data.
          </li>
          <li>
            <strong className="text-gray-700 dark:text-gray-300">
              Erasure (&quot;right to be forgotten&quot;)
            </strong>{" "}
            — ask us to delete your data.
          </li>
          <li>
            <strong className="text-gray-700 dark:text-gray-300">Restriction</strong> — ask us to
            limit processing of your data.
          </li>
          <li>
            <strong className="text-gray-700 dark:text-gray-300">Objection</strong> — object to
            processing based on legitimate interests.
          </li>
          <li>
            <strong className="text-gray-700 dark:text-gray-300">Data portability</strong> —
            receive your data in a structured, machine-readable format.
          </li>
        </ul>
        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
          To exercise any of these rights, contact{" "}
          <a href="mailto:oncvlink@gmail.com" className="text-blue-500 hover:underline">
            oncvlink@gmail.com
          </a>
          . We will respond within 30 days.
        </p>
        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
          <strong className="text-gray-700 dark:text-gray-300">EU/EEA residents</strong> may also
          lodge a complaint with the Bulgarian Commission for Personal Data Protection (CPDP):{" "}
          <a
            href="https://www.cpdp.bg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            www.cpdp.bg
          </a>
          , or with the data protection authority in their country of residence.
        </p>
        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
          <strong className="text-gray-700 dark:text-gray-300">California residents</strong> may
          have additional rights under the California Consumer Privacy Act (CCPA), including the
          right to know what personal information is collected and the right to opt out of its sale.
          We do not sell personal data.
        </p>
        <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
          Users in other jurisdictions may have additional rights under their local laws. We will
          honour all reasonable privacy requests to the best of our ability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Children</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          onCV.link is not directed at children under the age of 16. We do not knowingly collect
          personal data from children. If you believe a child has submitted data through our forms,
          please contact us and we will delete it promptly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. Future Changes to the Service</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          We plan to introduce optional user accounts and server-side CV storage in a future paid
          tier. If and when that happens, this Privacy Policy will be updated and users will be
          notified in advance. The current free CV builder will continue to store data locally only.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">12. Changes to This Policy</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at
          the top will always reflect the most recent revision. Continued use of the service after
          changes constitutes acceptance of the updated policy.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">13. Contact</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          For any privacy-related questions or to exercise your rights:{" "}
          <a href="mailto:oncvlink@gmail.com" className="text-blue-500 hover:underline">
            oncvlink@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
