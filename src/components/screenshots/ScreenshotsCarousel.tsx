"use client";

import Image from "next/image";

const screenshots = [
  "/nova-vpn-screen.png",
  "/nova-vpn-screen2.png",
  "/nova-vpn-screen3.png",
  "/nova-vpn-screen4.png",
];

export default function ScreenshotsCarousel() {
  return (
    <section className="bg-black text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          SCREENSHOTS
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-16">
          INSIDE
          <br />
          NOVA VPN
        </h2>

        <div className="relative overflow-hidden">

          <div
            className="
              flex
              gap-8
              animate-[scroll_25s_linear_infinite]
              w-max
            "
          >
            {[...screenshots, ...screenshots].map((image, index) => (
              <div
                key={index}
                className="
                  min-w-[280px]
                  md:min-w-[320px]
                  rounded-[40px]
                  overflow-hidden
                  border
                  border-zinc-800
                "
              >
                <Image
                  src={image}
                  alt={`Screenshot ${index}`}
                  width={320}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}