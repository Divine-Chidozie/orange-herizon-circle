import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "How do I find the right vendor for my event?",
    answer:
      "Browse vendors by category, compare portfolios, read verified reviews, and contact vendors directly to discuss your event requirements.",
  },
  {
    id: 2,
    question: "Are all vendors on EventConnect verified?",
    answer:
      "Yes. Every vendor goes through our verification process before they can list their services, helping planners book with confidence.",
  },
  {
    id: 3,
    question: "Can I contact multiple vendors before making a decision?",
    answer:
      "Absolutely. You can message multiple vendors, compare their offerings and pricing, then choose the one that best fits your event.",
  },
  {
    id: 4,
    question: "How do vendors join EventConnect?",
    answer:
      "Vendors can create an account, complete their business profile, submit the required verification documents, and start showcasing their services once approved.",
  },
  {
    id: 5,
    question: "Is EventConnect free for planners to use?",
    answer:
      "Yes. Planners can browse vendors, compare services, and contact vendors at no cost. Some premium vendor features may require a subscription.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16" id="faq">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="max-w-2xl text-gray">
          Everything you need to know before getting started.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-border rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-medium hover:bg-gray-50 transition"
            >
              <span className="text-sm">{faq.question}</span>

              <span className="text-2xl">{openId === faq.id ? "−" : "+"}</span>
            </button>

            {openId === faq.id && (
              <div className="px-6 pb-5">
                <p className="text-gray leading-7 text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
