import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Navigation */}
      <div className="mx-auto mb-6 flex max-w-5xl items-center justify-between">
        <Link
          to="/"
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
        >
          ← Back to Home
        </Link>

        <Link
          to="/sign-up"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Create Account
        </Link>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-5xl rounded-2xl bg-white px-5 py-8 shadow-sm sm:px-8 lg:px-12 lg:py-12">
        {/* Header */}
        <div className="border-b border-gray-200 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            EventConnect Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            <strong>Effective Date:</strong> July 2026
          </p>
        </div>

        {/* Introduction */}
        <section className="mt-8">
          <p className="leading-7 text-gray-600">
            EventConnect ("we", "our", or "us") operates an online marketplace
            platform that enables event planners to discover, compare, and
            connect with trusted event vendors.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            This Privacy Policy explains how EventConnect collects, uses,
            stores, shares, and protects personal information when you access or
            use our platform and related services.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            By creating an account, accessing, or using EventConnect, you
            acknowledge that you have read and understood this Privacy Policy
            and agree to the practices described herein.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            1. Information We Collect
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            To provide, maintain, and improve our services, EventConnect may
            collect different categories of information from users, including:
          </p>

          <h3 className="mt-6 font-semibold text-gray-800">
            1.1 Personal Information
          </h3>

          <p className="mt-3 text-gray-600">
            When you create an account or use our platform, we may collect
            personal information such as:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
            <li>Full name.</li>
            <li>Email address.</li>
            <li>Phone number.</li>
            <li>Profile photo (optional).</li>
            <li>Business information where applicable.</li>
          </ul>

          <h3 className="mt-6 font-semibold text-gray-800">
            1.2 Vendor Information
          </h3>

          <p className="mt-3 text-gray-600">
            Vendors using EventConnect may provide additional business-related
            information, including:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
            <li>Business name.</li>
            <li>Business description.</li>
            <li>Categories of services offered.</li>
            <li>Service location.</li>
            <li>Portfolio images.</li>
            <li>Pricing information.</li>
            <li>Social media links.</li>
            <li>Business registration details where applicable.</li>
          </ul>

          <h3 className="mt-6 font-semibold text-gray-800">
            1.3 Usage and Technical Information
          </h3>

          <p className="mt-3 text-gray-600">
            When you interact with our platform, we may automatically collect
            technical and usage information, including:
          </p>

          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-600">
            <li>Device type.</li>
            <li>Browser information.</li>
            <li>IP address.</li>
            <li>Pages visited.</li>
            <li>Time spent on the platform.</li>
            <li>Application performance data.</li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            2. How We Use Your Information
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            EventConnect uses collected information to provide, operate, secure,
            and improve our platform. This includes:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Creating and managing user accounts.</li>
            <li>Connecting event planners with relevant event vendors.</li>
            <li>Improving platform functionality and user experience.</li>
            <li>Responding to customer support requests.</li>
            <li>Verifying vendor information.</li>
            <li>Detecting and preventing fraud, abuse, and security risks.</li>
            <li>Sending important service-related updates.</li>
            <li>Maintaining and improving platform security.</li>
          </ul>

          <p className="mt-4 leading-7 text-gray-600">
            EventConnect does not sell, rent, or trade users' personal
            information to third parties for commercial purposes.
          </p>
        </section>

        {/* Sharing Information */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            3. How We Share Your Information
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            EventConnect only shares personal information where necessary to
            provide our services, comply with legal obligations, or protect the
            safety and integrity of our platform.
          </p>

          <p className="mt-4 text-gray-600">Information may be shared:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>
              With planners or vendors when required to facilitate communication
              and marketplace interactions.
            </li>

            <li>
              With trusted service providers that assist us in operating and
              maintaining EventConnect.
            </li>

            <li>
              When disclosure is required by applicable laws, regulations, or
              legal processes.
            </li>

            <li>
              To investigate fraud, security threats, misuse, or activities that
              may harm our users or platform.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            4. Data Security
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            EventConnect implements reasonable technical, administrative, and
            organisational safeguards designed to protect personal information
            against unauthorised access, alteration, disclosure, misuse, or
            destruction.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            While we strive to protect your information using industry-standard
            security practices, no method of electronic transmission or storage
            can be guaranteed to be completely secure. Users are encouraged to
            take appropriate precautions, including safeguarding their account
            credentials.
          </p>
        </section>

        {/* User Rights */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            5. Your Rights
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Subject to applicable laws, you may have the right to:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Access the personal information we hold about you.</li>
            <li>Update or correct inaccurate personal information.</li>
            <li>Request deletion of your account and personal information.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>
              Request clarification regarding how your information is used.
            </li>
          </ul>

          <p className="mt-4 leading-7 text-gray-600">
            Certain information may be retained where required to comply with
            legal obligations, resolve disputes, enforce our agreements, or
            protect the security and integrity of the platform.
          </p>
        </section>

        {/* Cookies */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            6. Cookies and Similar Technologies
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            EventConnect may use cookies and similar technologies to improve the
            functionality of our platform, remember user preferences, analyse
            usage patterns, enhance security, and provide a better overall user
            experience.
          </p>
        </section>

        {/* Trust */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            7. Our Commitment to Trust and Transparency
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Trust is central to the EventConnect experience. We are committed to
            maintaining a transparent marketplace where event planners can
            confidently discover vendors and vendors can grow their businesses
            through meaningful connections.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            We believe users should clearly understand what information is
            collected, why it is collected, and how it is used. We continually
            review and improve our privacy and security practices to support a
            safe and reliable platform.
          </p>
        </section>

        {/* Vendor Verification */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            8. Vendor Verification
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            To strengthen trust within our marketplace, EventConnect may verify
            vendor information using business registration documents, identity
            verification, social media presence, or other supporting
            documentation where appropriate.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            A verified badge indicates that a vendor has successfully completed
            our verification process based on the information submitted.
            However, verification should not be interpreted as a guarantee of
            service quality, pricing, availability, business performance, or
            customer satisfaction. Users are encouraged to conduct their own due
            diligence before entering into agreements.
          </p>
        </section>

        {/* Fraud */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            9. Reporting Fraud or Suspicious Activity
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Users are encouraged to promptly report suspected scams,
            impersonation, fraudulent activities, fake profiles, security
            concerns, or behaviour that violates our community standards.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            Reports are reviewed by our team, and where appropriate,
            EventConnect may investigate, temporarily suspend, restrict, or
            permanently remove accounts that violate our policies or compromise
            the safety of our community.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            10. Data Retention
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            We retain personal information only for as long as necessary to
            provide our services, fulfil the purposes described in this Privacy
            Policy, comply with legal obligations, resolve disputes, and enforce
            our agreements. When information is no longer required, we take
            reasonable steps to securely delete or anonymise it.
          </p>
        </section>

        {/* Children */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            11. Children's Privacy
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            EventConnect is intended for individuals who are at least 18 years
            of age. We do not knowingly collect personal information from
            children. If we become aware that personal information has been
            collected from a child without appropriate legal authorisation, we
            will take reasonable steps to remove such information from our
            records.
          </p>
        </section>

        {/* Changes */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            12. Changes to This Privacy Policy
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            We may revise this Privacy Policy from time to time to reflect
            changes in our services, legal obligations, or operational
            practices. Any updates will become effective upon publication on the
            EventConnect platform unless otherwise stated. Continued use of the
            platform after such updates constitutes acceptance of the revised
            Privacy Policy.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-12 border-t pt-8">
          <h2 className="text-xl font-semibold text-gray-900">
            13. Contact Us
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            If you have any questions, concerns, or requests relating to this
            Privacy Policy or the way EventConnect handles your personal
            information, please contact us using the details below:
          </p>

          <div className="mt-5 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="font-medium text-gray-900">EventConnect</p>

            <p className="mt-2 text-gray-600">
              Email:{" "}
              <span className="font-medium">privacy@eventconnect.com</span>
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Please replace this email address with your official EventConnect
              privacy or support email before launching the platform.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 flex flex-col gap-3 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="font-medium text-primary transition hover:underline"
          >
            ← Back to Homepage
          </Link>

          <Link
            to="/sign-up"
            className="font-medium text-primary transition hover:underline"
          >
            Create an EventConnect Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
