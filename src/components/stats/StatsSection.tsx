"use client";

import FadeUp from "../ui/FadeUp";

export default function StatsSection() {
  const stats = [
    {
      number: "10K+",
      title: "Downloads",
      description: "Users enjoying our products.",
    },
    {
      number: "2+",
      title: "Products",
      description: "Apps currently available.",
    },
    {
      number: "24/7",
      title: "Innovation",
      description: "Always building new ideas.",
    },
    {
      number: "∞",
      title: "Ideas",
      description: "Future possibilities ahead.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-40 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8">
        <FadeUp>
          <div className="mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
              TB STUDIOS
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none">
              BUILDING
              <br />
              THE FUTURE
            </h2>

            <p className="mt-8 text-zinc-400 max-w-2xl">
              We focus on creating innovative apps, tools and digital
              experiences that scale globally.
            </p>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <FadeUp key={item.title}>
              <div
                className="
                  group
                  relative
                  bg-zinc-950/80
                  backdrop-blur-xl
                  border
                  border-zinc-800
                  rounded-[32px]
                  p-10
                  hover:border-cyan-500/50
                  hover:-translate-y-3
                  transition-all
                  duration-500
                  overflow-hidden
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-br
                    from-cyan-500/10
                    to-transparent
                  "
                />

                <h3
                  className="
                    relative
                    text-6xl
                    font-black
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  {item.number}
                </h3>

                <h4 className="relative mt-5 text-xl font-semibold">
                  {item.title}
                </h4>

                <p className="relative mt-3 text-zinc-400 text-sm">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}