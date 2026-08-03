import star2 from "../assets/icons/star2.png";

import ce from "../assets/icons/ce.png";
import tb from "../assets/icons/tb.png";
import fy from "../assets/icons/fy.png";

import petal from "../assets/images/petal.png";
import lumen from "../assets/images/lumen.png";
import regal from "../assets/images/regal.png";

import plannerlocation from "../assets/icons/plannerLocation.png";

const ratings = [
  { star: 5, count: 182, percentage: 85 },
  { star: 4, count: 24, percentage: 11 },
  { star: 3, count: 6, percentage: 3 },
  { star: 2, count: 1, percentage: 1 },
  { star: 1, count: 1, percentage: 1 },
];

const reviews = [
  {
    id: 1,
    image: ce,
    name: "Chidinma Eze",
    event: "Wedding • 180 Guests",
    review:
      "Amara and her team exceeded every expectation. The floral arch was breathtaking and the setup was flawless. Guests are still talking about the reception weeks later.",
    rating: 5.0,
  },
  {
    id: 2,
    image: tb,
    name: "Tunde Balogun",
    event: "Corporate Gala • 250 Guests",
    review:
      "Extremely professional and responsive. They understood our vision perfectly and delivered an elegant setup that made the entire event memorable.",
    rating: 4.8,
  },
  {
    id: 3,
    image: fy,
    name: "Fatima Yusuf",
    event: "Birthday Party • 60 Guests",
    review:
      "Beautiful decorations and lovely to work with. Setup ran slightly behind schedule but the final result was gorgeous and worth it.",
    rating: 5.0,
  },
];

const trustedVendors = [
  {
    id: 1,
    image: petal,
    name: "Petal & Pearl Decorations",
    service: "Floral & Table Styling",
    rating: 4.8,
    location: "Lekki, Lagos",
    startingPrice: "₦120,000",
    button: "View Profile",
  },
  {
    id: 2,
    image: lumen,
    name: "Lumen Event Studio",
    service: "Staging and Lighting Design",
    rating: 4.7,
    location: "Ikeja, Lagos",
    startingPrice: "₦200,000",
    button: "View Profile",
  },
  {
    id: 3,
    image: regal,
    name: "Regal Tants & Events",
    service: "Full Venue Description",
    rating: 4.9,
    location: "Abuja",
    startingPrice: "₦350,000",
    button: "View Profile",
  },
];

const VendorReviews = () => {
  return (
    <div>
      <section className="mt-10 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-12 sm:p-6 lg:mt-16 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            Reviews
          </h2>

          <p className="mt-1 text-sm text-gray-500">214 Reviews</p>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Overall Rating */}
          {/* Overall Rating */}
          <div className="flex min-w-[220px] flex-col items-center rounded-2xl bg-gray-50 p-6">
            <h3 className="text-5xl font-bold text-gray-900">4.8</h3>

            <div className="mt-3 flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={star2} alt="Star" className="h-5 w-5" />
              ))}
            </div>

            <span className="mt-2 text-sm font-medium text-gray-700">
              4.8 out of 5
            </span>

            <p className="mt-1 text-sm text-gray-500">Based on 214 reviews</p>
          </div>

          {/* Rating Breakdown */}
          <div className="flex-1 space-y-4">
            {ratings.map((rating) => (
              <div key={rating.star} className="flex items-center gap-4">
                <div className="w-14 text-sm font-medium text-gray-700">
                  {rating.star} Star
                </div>

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>

                <div className="w-10 text-right text-sm text-gray-500">
                  {rating.count}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-lg"
            >
              {/* Reviewer */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </h3>

                  <span className="text-xs text-gray-500">{review.event}</span>
                </div>
              </div>

              {/* Review */}
              <p className="mt-3 text-xs leading-5 text-gray-600">
                {review.review}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center">
                <div className="flex items-center gap-1 leading-none">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={star2}
                      alt="Star"
                      className="block h-4 w-4 shrink-0 object-contain"
                    />
                  ))}
                </div>

                <span className="ml-2 text-xs font-semibold text-gray-700">
                  {review.rating.toFixed(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 mb-40 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:mt-12 sm:p-6 lg:mt-16 lg:p-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            You may also like
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Trusted vendors with similar services
          </p>
        </div>

        {/* Vendors */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trustedVendors.map((vendor) => (
            <div
              key={vendor.id}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {vendor.name}
                  </h3>

                  <p className="mt-1 text-sm text-primary">{vendor.service}</p>

                  <div className="mt-2 flex items-center">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <img
                          key={index}
                          src={star2}
                          alt="Star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>

                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      {vendor.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mt-5 flex items-center gap-2">
                <img src={plannerlocation} alt="Location" className="h-4 w-4" />

                <span className="text-sm text-gray-600">{vendor.location}</span>
              </div>

              {/* Price */}
              <div className="mt-3">
                <span className="text-sm text-gray-500">Starting from </span>

                <span className="text-base font-bold text-gray-900">
                  {vendor.startingPrice}
                </span>
              </div>

              {/* Button */}
              <button className="mt-6 w-full rounded-full border border-primary py-2.5 text-sm font-semibold text-primary transition duration-300 hover:bg-primary hover:text-white">
                {vendor.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorReviews;
