// import React from "react";
import { Link } from "react-router-dom";
const TermsAndConditions = () => {
  return (
    <section className="bg-gray-50 py-12">
      {/* Header Navigation */}

      <div className="mx-auto mb-6 flex w-full max-w-5xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-0">
        <Link
          to="/"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:w-auto"
        >
          ← Back to Home
        </Link>

        <Link
          to="/sign-up"
          className="w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700 sm:w-auto"
        >
          Create Account
        </Link>
      </div>
      <div className="mx-auto max-w-5xl rounded-2xl bg-white px-6 py-10 shadow-sm lg:px-12">
        <h1 className="text-3xl font-bold text-gray-900">
          Terms and Conditions
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          <strong>Effective Date:</strong> July 2026
        </p>

        <p className="mt-6 text-gray-600 leading-7">
          Welcome to <strong>EventConnect</strong>. These Terms and Conditions
          govern your access to and use of the EventConnect platform. By
          creating an account or using our services, you agree to comply with
          these Terms. If you do not agree with any part of these Terms, please
          discontinue use of the platform.
        </p>

        {/* Acceptance */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>

          <p className="mt-3 text-gray-600 leading-7">
            By accessing or using EventConnect, you confirm that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>
        </section>

        {/* About */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">2. About EventConnect</h2>

          <p className="mt-3 text-gray-600 leading-7">
            EventConnect is an online marketplace that enables event planners to
            discover, compare, and connect with professional event vendors.
            EventConnect only facilitates connections between users and is not a
            party to any agreements or contracts entered into between planners
            and vendors.
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">3. User Responsibilities</h2>

          <p className="mt-3 text-gray-600">All users agree to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Provide accurate and truthful information.</li>
            <li>Keep login credentials secure.</li>
            <li>Respect other users.</li>
            <li>Use the platform lawfully.</li>
            <li>Avoid fraudulent or misleading activities.</li>
          </ul>
        </section>

        {/* Vendor */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">4. Vendor Responsibilities</h2>

          <p className="mt-3 text-gray-600">Vendors agree to:</p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Provide truthful business information.</li>
            <li>Upload accurate portfolios.</li>
            <li>Honour commitments made to customers.</li>
            <li>Maintain professional communication.</li>
            <li>Deliver services as agreed.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Repeated complaints or fraudulent behaviour may result in account
            suspension or permanent removal.
          </p>
        </section>

        {/* Planner */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            5. Event Planner Responsibilities
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Provide accurate event information.</li>
            <li>Treat vendors respectfully.</li>
            <li>Communicate honestly.</li>
            <li>Leave fair and truthful reviews.</li>
          </ul>
        </section>

        {/* Reviews */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">6. Reviews</h2>

          <p className="mt-3 text-gray-600">
            Reviews should reflect genuine experiences.
          </p>

          <p className="mt-4 text-gray-600">
            EventConnect reserves the right to remove reviews that are:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>False</li>
            <li>Offensive</li>
            <li>Spam</li>
            <li>Misleading</li>
            <li>Abusive</li>
          </ul>
        </section>

        {/* Prohibited */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">7. Prohibited Activities</h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Impersonating another person.</li>
            <li>Uploading harmful content.</li>
            <li>Attempting to hack the platform.</li>
            <li>Using fake accounts.</li>
            <li>Harassing other users.</li>
            <li>Violating applicable laws.</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">8. Intellectual Property</h2>

          <p className="mt-3 text-gray-600 leading-7">
            All EventConnect branding, logos, software, content, designs, and
            intellectual property belong to EventConnect unless otherwise
            stated. Users may not copy, reproduce, or redistribute any content
            without prior written permission.
          </p>
        </section>

        {/* Liability */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">9. Limitation of Liability</h2>

          <p className="mt-3 text-gray-600 leading-7">
            EventConnect provides a platform that connects planners and vendors.
            We are not responsible for:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Service quality.</li>
            <li>Missed appointments.</li>
            <li>Pricing disputes.</li>
            <li>Contract disagreements.</li>
            <li>Financial losses arising from user agreements.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Users are encouraged to conduct reasonable due diligence before
            entering into agreements.
          </p>
        </section>

        {/* Community Standards */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">10. Community Standards</h2>

          <p className="mt-3 text-gray-600">
            EventConnect is built on respect, honesty, and professionalism.
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Communicate respectfully.</li>
            <li>Treat everyone fairly.</li>
            <li>Avoid harassment, discrimination, or abusive language.</li>
            <li>Respect user privacy.</li>
            <li>Avoid misleading behaviour.</li>
          </ul>
        </section>

        {/* Fair Marketplace */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">11. Fair Marketplace Policy</h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Create fake accounts.</li>
            <li>Post fake reviews.</li>
            <li>Manipulate ratings.</li>
            <li>Misrepresent services.</li>
            <li>Use another person's identity.</li>
            <li>Artificially damage another user's reputation.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            EventConnect reserves the right to investigate suspicious activity
            and remove any content or account that compromises the integrity of
            the platform.
          </p>
        </section>

        {/* Search Results */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            12. Vendor Listings and Search Results
          </h2>

          <p className="mt-3 text-gray-600">
            Search results may be influenced by:
          </p>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Service category.</li>
            <li>Location.</li>
            <li>Profile completeness.</li>
            <li>Verification status.</li>
            <li>User ratings and reviews.</li>
            <li>Availability of relevant information.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Sponsored placements will always be clearly identified.
          </p>
        </section>

        {/* Disputes */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">13. Dispute Resolution</h2>

          <p className="mt-3 text-gray-600 leading-7">
            Users are encouraged to resolve disagreements directly through
            respectful communication. EventConnect may review complaints,
            request supporting evidence, suspend accounts involved in serious
            misconduct, or remove repeat offenders.
          </p>
        </section>

        {/* Suspension */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            14. Account Suspension and Termination
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
            <li>Fraud or scams.</li>
            <li>False information.</li>
            <li>Repeated verified complaints.</li>
            <li>Violation of these Terms.</li>
            <li>Illegal activities.</li>
            <li>Compromising platform security.</li>
          </ul>

          <p className="mt-4 text-gray-600">
            Users may contact support to request a review of any suspension.
          </p>
        </section>

        {/* Future Features */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">
            15. Future Platform Features
          </h2>

          <p className="mt-3 text-gray-600 leading-7">
            EventConnect may introduce features such as secure payments,
            messaging, booking management, calendars, or enhanced verification
            services. These features will remain subject to these Terms and any
            additional policies communicated at launch.
          </p>
        </section>

        {/* Changes */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">16. Changes to These Terms</h2>

          <p className="mt-3 text-gray-600">
            We may update these Terms from time to time. Continued use of
            EventConnect after any update constitutes acceptance of the revised
            Terms.
          </p>
        </section>

        {/* Governing Law */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">17. Governing Law</h2>

          <p className="mt-3 text-gray-600">
            These Terms shall be governed by the laws applicable in the country
            where EventConnect operates.
          </p>
        </section>

        {/* Contact */}
        <section className="mt-10 border-t pt-8">
          <h2 className="text-xl font-semibold">Contact Us</h2>

          <p className="mt-3 text-gray-600">
            If you have any questions regarding these Terms and Conditions,
            please contact us:
          </p>

          <a
            href="mailto:testemail4circointern@gmail.com"
            className="mt-4 inline-block font-medium text-primary hover:underline"
          >
            testemail4circointern@gmail.com
          </a>
        </section>
      </div>
    </section>
  );
};

export default TermsAndConditions;
