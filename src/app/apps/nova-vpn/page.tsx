import Image from "next/image";

export default function NovaVPNPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
              VPN APPLICATION
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              NOVA
              <br />
              VPN
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl">
              Fast, secure and reliable VPN designed for
              privacy-conscious users worldwide.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">

              <a
                href="https://play.google.com/store/apps/details?id=com.tbstudios.novaa_vpn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-cyan-500
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition
                "
              >
                Download App
              </a>

              <a
                href="#features"
                className="
                  border
                  border-zinc-700
                  px-8
                  py-4
                  rounded-full
                  hover:bg-zinc-900
                  transition
                "
              >
                Learn More
              </a>

            </div>
          </div>

          {/* RIGHT PHONE */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div
              className="
                absolute
                w-[450px]
                h-[450px]
                bg-cyan-500/20
                blur-[120px]
                rounded-full
                -z-10
              "
            />

            <div
              className="
                relative
                w-[320px]
                h-[650px]
                rounded-[50px]
                border
                border-zinc-800
                bg-black
                overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            >
              {/* Notch */}
              <div
                className="
                  absolute
                  top-0
                  left-1/2
                  -translate-x-1/2
                  w-32
                  h-7
                  bg-black
                  rounded-b-2xl
                  z-20
                "
              />

              {/* Screenshot */}
              <Image
                src="/nova-vpn-screen.png"
                alt="Nova VPN Screenshot"
                fill
                priority
                className="object-cover"
              />

              {/* Reflection */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-tr
                  from-transparent
                  via-white/5
                  to-white/20
                "
              />
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-8 py-24"
      >
        <h2 className="text-5xl font-black mb-12">
          FEATURES
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition">
            <h3 className="text-2xl font-bold mb-4">
              Secure
            </h3>

            <p className="text-zinc-400">
              Protect your online activity with advanced
              encryption and privacy protection.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition">
            <h3 className="text-2xl font-bold mb-4">
              Fast
            </h3>

            <p className="text-zinc-400">
              High-speed VPN servers optimized for smooth
              browsing and streaming.
            </p>
          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-500 transition">
            <h3 className="text-2xl font-bold mb-4">
              Reliable
            </h3>

            <p className="text-zinc-400">
              Stable and secure connections available
              whenever you need them.
            </p>
          </div>

        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-black mb-12">
          SCREENSHOTS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl overflow-hidden border border-zinc-800">
            <Image
              src="/nova-vpn-screen.png"
              alt="Screenshot 1"
              width={400}
              height={800}
              className="w-full"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-zinc-800">
            <Image
              src="/nova-vpn-screen2.png"
              alt="Screenshot 2"
              width={400}
              height={800}
              className="w-full"
            />
          </div>

          <div className="rounded-3xl overflow-hidden border border-zinc-800">
            <Image
              src="/nova-vpn-screen3.png"
              alt="Screenshot 3"
              width={400}
              height={800}
              className="w-full"
            />
          </div>

        </div>
      </section>

    </main>
  );
}