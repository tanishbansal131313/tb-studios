"use client";

const faqs = [
  {
    question: "Is Nova VPN free to use?",
    answer:
      "Yes, Nova VPN provides free servers for all users.",
  },
  {
    question: "Does Nova VPN collect user data?",
    answer:
      "No. We prioritize privacy and do not store browsing activity.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "Currently Android devices are supported.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us through the Contact page.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-5xl mx-auto px-8">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          FAQ
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-16">
          FREQUENTLY
          <br />
          ASKED QUESTIONS
        </h2>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-3xl
                p-8
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {faq.question}
              </h3>

              <p className="text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}