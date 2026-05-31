"use client";

const testimonials = [
  {
    name: "Android User",
    text: "Nova VPN is incredibly fast and easy to use.",
  },
  {
    name: "Early Tester",
    text: "The UI is clean, modern and works perfectly.",
  },
  {
    name: "Community Member",
    text: "One of the most promising projects from TB Studios.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-zinc-950 text-white py-32">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          TESTIMONIALS
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-16">
          WHAT PEOPLE
          <br />
          SAY
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                bg-black
                border
                border-zinc-800
                rounded-3xl
                p-8
                hover:border-cyan-500
                transition
              "
            >
              <p className="text-zinc-300 text-lg leading-relaxed">
                "{item.text}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}