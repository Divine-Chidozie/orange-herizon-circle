import { Link } from "react-router-dom";

const PricingVendor = () => {
  return (
    <div>
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-12 sm:p-6 lg:mt-16 lg:p-8">
        {/* Heading */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            Pricing
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Flexible packages tailored to your event
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* First Card */}
          <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h4 className="text-lg font-bold text-gray-900">Essential</h4>

            <div className="mt-5">
              <span className="text-xs text-gray-500">Starting from</span>

              <h4 className="mt-1 text-2xl font-bold text-gray-900">
                ₦150,000
              </h4>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Thoughtful styling for intimate celebrations and private dinners.
            </p>

            <div className="mt-5 space-y-2">
              <p className="text-sm text-gray-600">• Up to 50 guests</p>
              <p className="text-sm text-gray-600">• Half-day setup</p>
            </div>

            <Link
              to="#"
              className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-4 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-200 sm:w-auto"
            >
              Request this package
            </Link>
          </div>

          {/* Second Card */}
          <div className="flex h-full flex-col rounded-3xl border border-primary bg-white p-6 shadow-lg transition hover:shadow-xl">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-gray-900">Signature</h4>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                Popular
              </span>
            </div>

            <div className="mt-5">
              <span className="text-xs text-gray-500">Starting from</span>

              <h4 className="mt-1 text-2xl font-bold text-gray-900">
                ₦450,000
              </h4>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Our most popular package for weddings and premium events.
            </p>

            <div className="mt-5 space-y-2">
              <p className="text-sm text-gray-600">• Up to 200 guests</p>
              <p className="text-sm text-gray-600">• Full-day setup</p>
            </div>

            <Link
              to="#"
              className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
            >
              Request this package
            </Link>
          </div>

          {/* Third Card */}
          <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h4 className="text-lg font-bold text-gray-900">Bespoke</h4>

            <div className="mt-5">
              <span className="text-2xl font-bold text-gray-900">
                Price on Request
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Full custom, large-scale venue transformations tailored to your
              vision.
            </p>

            <div className="mt-5 space-y-2">
              <p className="text-sm text-gray-600">• 200+ guests</p>
              <p className="text-sm text-gray-600">• Multi-day setup</p>
            </div>

            <Link
              to="#"
              className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-gray-300 bg-gray-100 px-4 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-200 sm:w-auto"
            >
              Request this package
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingVendor;
