import React from "react";
// import "./PrivacyPolicy.css";

import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p>
          {/* <strong>Last Updated:</strong> [Insert Date] */}
        </p>

        <section>
          <h2>Introduction</h2>
          <p>
            StudyTasky We respects your privacy and is committed to protecting
            your personal data. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our
            mobile application StudyTasky. Please read this policy carefully to
            understand our views and practices regarding your information and
            how we will treat it.
          </p>
        </section>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We may collect and process the following types of information:</p>
          <ul>
            <li>
              <strong>1.1 Personal Information:</strong> Name, email address, or
              other contact information when you register or interact with the
              app's features.
            </li>
            <li>
              <strong>1.2 Usage Data:</strong> Information about your
              interactions with the App, including task creation, schedules,
              reminders, and routine management.
            </li>
            <li>
              <strong>1.3 Device Information:</strong> Details about the device
              you use to access the App, including IP address, device ID,
              operating system, and browser type.
            </li>
            <li>
              <strong>1.4 Optional Information:</strong> Data provided by you
              voluntarily, such as notes or comments within assignments,
              reminders, or schedules.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide and maintain the App's features.</li>
            <li>
              Personalize your experience, including recommendations and
              reminders.
            </li>
            <li>Manage your account and user preferences.</li>
            <li>Notify you about changes or updates to the App.</li>
            <li>Improve the App’s performance and troubleshoot issues.</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information. However,
            we may share your information in the following cases:
          </p>
          <ul>
            <li>
              <strong>With Service Providers:</strong> To help operate and
              improve the App, such as cloud storage or notification services.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> To comply with applicable
              laws, regulations, or legal processes.
            </li>
            <li>
              <strong>With Your Consent:</strong> When you explicitly agree to
              share your information with third parties.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We use appropriate technical and organizational measures to
            safeguard your data against unauthorized access, disclosure, or
            misuse. However, no method of transmission over the internet or
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </section>

        <section>
          <h2>5. User Control and Choices</h2>
          <p>You have the following rights regarding your data:</p>
          <ul>
            <li>Access, update, or delete your personal information.</li>
            <li>
              Opt out of specific data collection practices, such as analytics
              or notifications.
            </li>
            <li>Withdraw consent for data processing where applicable.</li>
          </ul>
          <p>
            For assistance, please contact us at{" "}
            <strong>[Contact Email]</strong>.
          </p>
        </section>

        <section>
          <h2>6. Data Retention</h2>
          <p>
            We retain your data only for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy unless a longer retention
            period is required by law.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            The App may use third-party services, such as analytics or
            notification providers. These third-party services have their own
            privacy policies. We recommend reviewing their policies to
            understand how they handle your information.
          </p>
        </section>

        <section>
          <h2>8. Children’s Privacy</h2>
          <p>
            The App is not intended for users under the age of 13, and we do not
            knowingly collect data from children. If we become aware of any such
            data, we will delete it promptly.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted in this section. Your continued use of the App after such
            changes indicates your acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> [Insert Contact Email]
            </li>
            <li>
              <strong>Address:</strong> [Insert Business Address, if applicable]
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
