import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Privacy Policy</CardTitle>
          <CardDescription>Effective Date: March 22, 2025</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              At Invelttoir, we prioritize the privacy and security of our
              users. This Privacy Policy explains how we collect, use, store,
              and protect your personal data and your rights regarding this
              information. By using our website (https://www.invelttoir.com) and
              related services, you agree to the terms of this policy.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              Personal Information: Name, email address, phone number, account
              credentials.
            </p>
            <p className="mb-2">
              Generated Content: Titles, descriptions, images generated or
              uploaded by the user.
            </p>
            <p className="mb-2">
              Usage Data: IP addresses, browser type, access times, pages
              visited.
            </p>
            <p>
              Third-Party Integration Data: Information obtained through
              authorized APIs like Pinterest, including user profiles, content
              data, and actions taken via the API.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">
              To provide, improve, and personalize our services.
            </p>
            <p className="mb-2">
              To generate content (titles, descriptions, images) based on user
              input or automated AI tools.
            </p>
            <p className="mb-2">
              To facilitate integrations with platforms like Pinterest via their
              official API.
            </p>
            <p className="mb-2">
              To communicate with users for support, updates, and marketing
              (only with consent).
            </p>
            <p>To comply with legal requirements.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Data Processing and Storage
            </h2>
            <p className="mb-2">
              All user data, including data obtained through Pinterest&apos;s API, is
              securely processed on encrypted servers.
            </p>
            <p className="mb-2">
              Data is stored in compliance with industry standards, with regular
              security audits and access control.
            </p>
            <p>
              API data is used only for the purposes described, is never shared
              externally, and is deleted upon user request or disconnection from
              the API.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Data Sharing and Disclosure
            </h2>
            <p className="mb-2">We do not sell or rent your personal data.</p>
            <p className="mb-2">
              Data is shared only with trusted third-party services for
              functionality (e.g., cloud storage, analytics, API services).
            </p>
            <p>
              We may disclose data when required by law or to protect our
              rights.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p className="mb-2">
              We use industry-standard security measures including SSL
              encryption, secure servers, and regular audits.
            </p>
            <p>
              Access to sensitive data is restricted to authorized personnel
              only.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">7. User Rights</h2>
            <p className="mb-2">
              You can request to access, correct, or delete your personal
              information at any time by contacting us at
              [support@invelttoir.com].
            </p>
            <p>
              Users can revoke API access and disconnect from third-party
              services (e.g., Pinterest) at any time.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Cookies and Tracking
            </h2>
            <p className="mb-2">
              We use cookies to enhance user experience, track usage patterns,
              and improve services.
            </p>
            <p>Users can control cookie settings through their browser.</p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              9. Third-Party Services
            </h2>
            <p className="mb-2">
              Our platform may contain links to third-party websites or
              services. We are not responsible for their privacy practices.
            </p>
            <p>
              All integrations with platforms like Pinterest comply with their
              developer guidelines and API terms.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              10. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to children under 13. We do not
              knowingly collect personal data from children.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              11. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated effective date.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              12. Contact Information
            </h2>
            <p>
              For questions or concerns regarding this policy, please contact us
              at: Email: support@invelttoir.com Address: [Insert company
              address]
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              13. Compliance Statement
            </h2>
            <p className="mb-2">
              We comply with all applicable data protection laws (GDPR, CCPA,
              etc.).
            </p>
            <p className="mb-2">
              We follow Pinterest&apos;s Developer Guidelines and API Terms of
              Service.
            </p>
            <p className="mb-2">
              We do not engage in spam or unauthorized automation.
            </p>
            <p>
              All actions taken via our platform are user-initiated and occur
              only with the user&apos;s specific knowledge and consent. We do not
              perform any actions on behalf of users without clear consent.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">14. Consent</h2>
            <p>
              By using our services, you consent to the terms of this Privacy
              Policy.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              15. Real-Time Data Usage
            </h2>
            <p className="mb-2">
              Our application is designed to utilize Pinterest&apos;s API calls in
              real-time.
            </p>
            <p className="mb-2">
              We do not store any user data, content information, or materials
              obtained from Pinterest&apos;s API, except for campaign analytics
              information accessed specifically about our account.
            </p>
            <p>
              Any data required for operations is fetched fresh from Pinterest&apos;s
              API during each user session or process to guarantee accuracy and
              compliance.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              16. No Data Persistence Policy
            </h2>
            <p className="mb-2">
              Information retrieved via Pinterest&apos;s API (other than permitted
              analytics data) is not stored, cached, or retained in any form on
              our servers or databases.
            </p>
            <p>
              Data is only temporarily processed in transit for the purpose of
              fulfilling the requested action and is discarded immediately after
              use.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              17. Handling Campaign Analytics
            </h2>
            <p className="mb-2">
              The only data that we store, as per Pinterest&apos;s allowance,
              pertains to campaign analytics information accessed about our own
              account.
            </p>
            <p>
              This data is stored securely, used exclusively for performance
              analysis and service optimization, and never shared with
              unauthorized third parties.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              18. User Transparency and Consent
            </h2>
            <p className="mb-2">
              All API calls made on behalf of the user are initiated with the
              user&apos;s full knowledge and consent.
            </p>
            <p>
              Users are informed that all necessary information is retrieved
              from Pinterest directly and is not stored beyond the session.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              19. Security Measures
            </h2>
            <p className="mb-2">
              We implement strong encryption and security protocols for all API
              communications.
            </p>
            <p>
              Access to campaign analytics information is strictly controlled
              and limited to authorized personnel.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              20. Compliance Statement
            </h2>
            <p className="mb-2">
              We explicitly affirm that our system does not store Pinterest API
              data (except for allowed campaign analytics).
            </p>
            <p>
              All required information is obtained via real-time API calls in
              full compliance with Pinterest&apos;s Developer Guidelines.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Pinterest Developer Compliance Addendum
            </h2>

            <h3 className="text-xl font-semibold mb-2">
              1. No Automatic Actions Without User Review
            </h3>
            <p className="mb-2">
              Our application ensures that all actions, including pin selection,
              following accounts, and commenting, are initiated by the user with
              clear and explicit consent.
            </p>
            <p className="mb-2">
              We do not schedule, publish, or perform any action on behalf of
              the user without their specific, per-action confirmation.
            </p>
            <p className="mb-2">
              Each automated tool in our system functions only with user
              verification at every step.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              2. No Data Combining
            </h3>
            <p className="mb-2">
              We do not and will not combine any data retrieved from Pinterest
              with data from other services, user accounts, or third-party
              platforms.
            </p>
            <p className="mb-2">
              Each user&apos;s Pinterest data remains separate and is used solely to
              provide services for that user&apos;s account.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              3. No Creation of New Content From Pins
            </h3>
            <p className="mb-2">
              Our application does not create, transform, or redistribute new
              content derived from Pinterest Pins outside of Pinterest.
            </p>
            <p className="mb-2">
              All content from Pinterest is used strictly in line with
              Pinterest&apos;s content policies and without modification that alters
              its source or original intent.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              4. No Benchmarking or Competitor Insights
            </h3>
            <p className="mb-2">
              We do not engage in or offer features that involve benchmarking,
              competitor research, or platform insights.
            </p>
            <p className="mb-2">
              Our application will not provide any form of analytics or
              reporting regarding Pinterest&apos;s platform performance or
              comparisons with competitors unless specifically authorized by
              Pinterest.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              5. Clear Link to Source Pins
            </h3>
            <p className="mb-2">
              If and when our application displays Pinterest content, each Pin
              will link directly back to its source on Pinterest.
            </p>
            <p className="mb-2">
              We ensure that users can easily identify the origin of any
              Pinterest content used within our application.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">
              6. No Evasion or Circumvention
            </h3>
            <p className="mb-2">
              Our application does not attempt to bypass or circumvent
              Pinterest&apos;s restrictions, geoblocking measures, consent
              mechanisms, or any policy enforcement system.
            </p>
            <p className="mb-2">
              We are committed to operating within the framework provided by
              Pinterest&apos;s policies and maintaining transparency in all API
              interactions.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Pinterest Developer Guidelines Compliance Statement
            </h2>
            <p className="mb-4">
              Our platform fully adheres to Pinterest&apos;s Developer Guidelines and
              related policies. Here is a detailed breakdown of our compliance
              measures:
            </p>

            <ol className="list-decimal pl-5 space-y-2">
              <li>
                No Automatic Actions Without User Review: We ensure users
                manually select each pin, follow action, or comment. No
                automatic scheduling, publishing, or action is taken without
                explicit, per-action consent from the user.
              </li>
              <li>
                No Data Storing or Combining: We do not store any data from
                Pinterest Materials (including APIs) beyond what is temporarily
                required to process a request. We do not combine Pinterest data
                with data from other platforms or accounts.
              </li>
              <li>
                Access Authorization: Access to user accounts is granted only
                with explicit authorization via access tokens. We do not solicit
                login credentials or use them for unauthorized purposes.
              </li>
              <li>
                Transparency: We clearly inform users about all functionalities
                and features of our app. Users are not misled or confused in any
                part of our process.
              </li>
              <li>
                No Content Creation From Pinterest Pins: Our platform does not
                create, redistribute, or repurpose new content from Pinterest
                Pins for use outside of Pinterest.
              </li>
              <li>
                Clear Source Linking: All displayed Pinterest content in our app
                includes direct links back to the original Pinterest URL,
                maintaining content authenticity and traceability.
              </li>
              <li>
                No Benchmarking or Competitor Insights: We do not provide
                benchmarking, competitor research, or platform insights unless
                we have explicit, written authorization from Pinterest.
              </li>
              <li>
                No Scraping or Unauthorized Data Collection: Our system does not
                use scraping, automated data extraction, or any unauthorized
                methods to access Pinterest data.
              </li>
              <li>
                API Credential Security: Our API credentials are securely stored
                and not shared. Users may use their API keys locally as per
                Pinterest&apos;s guidelines.
              </li>
              <li>
                No Policy Evasion or Circumvention: We do not attempt to bypass
                Pinterest restrictions, geoblocks, or enforcement systems. Our
                app does not offer any feature designed to circumvent these
                controls.
              </li>
              <li>
                Content Publishing Compliance: We do not cover, obscure, or
                modify Pinterest content and do not apply filters or edits. Pins
                are displayed as they are with proper source attribution.
              </li>
              <li>
                Ad Data Compliance: Our app does not provide advertising
                services that use Pinterest data unless fully compliant with
                Pinterest&apos;s Ad Data Terms and Advertising Guidelines.
              </li>
              <li>
                Abuse Prevention: We actively prevent spam and misuse by
                ensuring our features cannot be used for spammy actions or
                abusive behavior on Pinterest.
              </li>
              <li>
                No Misrepresentation: We do not misrepresent our relationship
                with Pinterest or falsely claim any special access.
              </li>
              <li>
                No Underage Targeting: Our platform is not intended for children
                under the age of 13.
              </li>
            </ol>

            <p className="mt-4">
              We are committed to upholding Pinterest&apos;s mission and fostering a
              trustworthy, transparent environment for our users.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Explicit Reference to Pinterest Data:
            </h2>
            <p className="mb-4">
              If Invelttoir.com integrates with Pinterest&apos;s API or accesses any
              user data sourced from Pinterest, it is critical that the privacy
              policy clearly and comprehensively details this integration. The
              privacy policy should explicitly state that data obtained through
              Pinterest&apos;s API is handled in strict compliance with Pinterest&apos;s
              Developer Guidelines. This includes clarifying the types of data
              retrieved (such as user profiles, pins, boards, or analytics
              data), the purpose for which this data is used, and ensuring it is
              solely utilized to provide services to the individual user from
              whom the data originated. Additionally, the policy should assert
              that no Pinterest data will be stored server-side unless
              permitted, and any processing of this data will only be done
              transiently, with API calls made each time access is required. The
              policy must also make clear that no data derived from Pinterest
              will be shared, sold, or combined with data from other platforms
              or services. Further, the privacy policy should describe the
              security measures in place to protect any Pinterest data handled,
              including the safeguarding of API credentials and strict access
              controls. This level of transparency fosters user confidence and
              demonstrates full adherence to Pinterest&apos;s developer requirements.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">User Data Management:</h2>
            <p className="mb-4">
              Invelttoir.com should prioritize empowering users to manage their
              data with ease and transparency. This involves implementing
              intuitive, user-friendly tools within the application that allow
              users to view, edit, and delete any personal data collected or
              processed by the platform. A dedicated data management section
              within user accounts should enable users to review uploaded
              images, generated content, and any metadata associated with their
              activity. The app should offer clear options for deleting
              user-generated content and account data, with immediate effect and
              without requiring users to make external requests. Providing an
              in-app feature to export personal data in a readable format can
              further enhance user trust. Additionally, the privacy policy must
              outline these functionalities, explaining how users can access,
              modify, or erase their data. Detailed instructions should be
              included to ensure users understand their rights and the steps
              they can take. Transparent communication about data retention
              timelines, as well as assurances that deleted data is permanently
              removed from all storage systems (including backups) after a
              specified period, will further reinforce the platform&apos;s commitment
              to user privacy and control.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-2xl font-bold mb-4">Regular Policy Reviews:</h2>
            <p className="mb-4">
              To ensure ongoing compliance with Pinterest&apos;s guidelines and
              applicable laws, Invelttoir.com must establish a structured
              process for regular reviews and updates of its privacy policy.
              This review process should occur at least quarterly or immediately
              after any significant changes in data handling practices,
              third-party integrations, or legal requirements. The policy review
              process should be overseen by a dedicated compliance team or data
              privacy officer who stays updated on changes in regulations,
              industry standards, and Pinterest&apos;s evolving developer
              requirements. Following each review, any amendments made to the
              privacy policy should be communicated to all users through
              prominent in-app notifications, emails, and updates on the
              official website. The platform should maintain a changelog within
              the privacy policy document, highlighting the nature of each
              update and the effective date. Additionally, providing an easy way
              for users to review past versions of the privacy policy helps
              build transparency and accountability. This proactive approach to
              policy management not only ensures legal and platform compliance
              but also cultivates user trust by demonstrating the platform&apos;s
              dedication to responsible data stewardship and continuous
              improvement.
            </p>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Data Processing and Storage
            </h2>
            <p className="mb-2">
              All user data, including data obtained through Pinterest&apos;s API, is
              securely processed on encrypted servers.
            </p>
            <p className="mb-2">
              Data is stored in compliance with industry standards, with regular
              security audits and access control.
            </p>
            <p className="mb-2">
              API data is used only for the purposes described, is never shared
              externally, and is deleted upon user request or disconnection from
              the API.
            </p>
            <p>
              Campaign analytics data (specific to our account) is used solely
              for internal performance analysis and is never shared with third
              parties, including advertisers, unless explicitly required by law.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Data Sharing and Disclosure
            </h2>
            <p className="mb-2">We do not sell or rent your personal data.</p>
            <p className="mb-2">
              Data is shared only with trusted third-party services for
              functionality (e.g., cloud storage, analytics, API services).
            </p>
            <p className="mb-2">
              Data obtained via Pinterest&apos;s API is not shared with any
              third-party services except as required to fulfill user-initiated
              actions (e.g., publishing a Pin via the API).
            </p>
            <p>
              We may disclose data when required by law or to protect our
              rights.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Children&apos;s Privacy
            </h2>
            <p>
              Our services are neither designed for nor directed at children
              under 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Information We Collect
            </h2>
            <p>
              We never request or store Pinterest login credentials. All account
              access is granted via OAuth tokens provided by Pinterest.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Data Processing and Storage (Additional Clause)
            </h2>
            <p>
              User-generated content (e.g., titles, descriptions, images) is
              retained for 12 months after account deletion unless legally
              required otherwise. Data obtained via Pinterest&apos;s API is not
              stored beyond the immediate session.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Compliance Statement (Expanded)
            </h2>
            <p className="mb-2">
              We do not claim endorsement, partnership, or special privileges
              with Pinterest unless explicitly authorized in writing.
            </p>
            <p className="mb-2">
              We comply with all applicable data protection laws (GDPR, CCPA,
              etc.).
            </p>
            <p>
              We follow Pinterest&apos;s Developer Guidelines and API Terms of
              Service.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Pinterest Developer Compliance Addendum (Revised)
            </h2>
            <h3 className="text-lg font-medium mb-2">
              1. Access Authorization
            </h3>
            <p className="mb-4">
              We never solicit or store Pinterest login credentials (passwords,
              session cookies, etc.). Account access is exclusively granted via
              OAuth tokens issued by Pinterest.
            </p>

            <h3 className="text-lg font-medium mb-2">
              2. No Misrepresentation
            </h3>
            <p>
              We do not misrepresent our relationship with Pinterest. We do not
              claim partnership, endorsement, or special access unless
              explicitly authorized in writing by Pinterest.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
