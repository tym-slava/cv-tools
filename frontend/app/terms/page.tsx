import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: March 21, 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          By accessing or using onCV.link you agree to these Terms of Service. If you do not agree,
          please do not use the service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. About the Service</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          onCV.link is a free online CV/résumé builder. You can create, edit, and export your CV
          without creating an account. All CV data you enter is stored locally in your browser and
          is never transmitted to our servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Your Data Is Yours</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Because your CV data lives only in your browser, you are solely responsible for
          maintaining it. Clearing your browser storage, switching devices, or using
          private/incognito mode will result in loss of your locally stored CV data. onCV.link
          accepts no liability for such data loss.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Acceptable Use</h2>
        <p className="mb-3 leading-relaxed text-gray-600 dark:text-gray-400">You agree not to:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
          <li>Use the service for any unlawful purpose.</li>
          <li>Attempt to reverse-engineer, scrape, or interfere with the service.</li>
          <li>Submit false or misleading information through our contact or suggestion forms.</li>
          <li>
            Use automated tools to access or interact with the service in a way that places
            unreasonable load on our infrastructure.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          The onCV.link service — including its code, design, templates, and branding — is the
          intellectual property of the service operator. You may not copy, reproduce, or distribute
          it without permission.
          <br />
          <br />
          The content you create using the CV builder (your CV text, your data) belongs entirely to
          you. We claim no ownership over it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          The &quot;Suggest a Feature&quot; form uses Google Apps Script and Google Sheets to
          receive and store submissions. By submitting that form you acknowledge that your data will
          be processed by Google in accordance with their{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Disclaimer of Warranties</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          The service is provided <strong>&quot;as is&quot;</strong> and{" "}
          <strong>&quot;as available&quot;</strong> without warranties of any kind, express or
          implied. We do not warrant that the service will be uninterrupted, error-free, or that CVs
          generated will be suitable for any particular job application or purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          To the fullest extent permitted by applicable law, the operator of onCV.link shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages,
          including but not limited to: loss of data stored in the browser, failure to secure
          employment, or service downtime.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Future Paid Features</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          We may introduce optional paid features in the future, including user accounts and cloud
          storage. If that happens, separate terms will apply to the paid tier. The current free CV
          builder will remain free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">10. Changes to These Terms</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          We reserve the right to modify these Terms at any time. The &quot;Last updated&quot; date
          at the top will be revised accordingly. Continued use of the service after changes
          constitutes acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          These Terms are governed by the laws of the Republic of Bulgaria and applicable European
          Union law, to the extent permitted by the mandatory laws of your country of residence. If
          you are located outside the EU, local mandatory consumer protection laws in your
          jurisdiction may also apply and are not excluded by these Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">12. Contact</h2>
        <p className="leading-relaxed text-gray-600 dark:text-gray-400">
          Questions about these Terms:{" "}
          <a href="mailto:oncvlink@gmail.com" className="text-blue-500 hover:underline">
            oncvlink@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
