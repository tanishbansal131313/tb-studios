import Image from "next/image";

const screenshots = [
  "/e1.png",
  "/e2.png",
  "/e3.png",
  "/e4.png",
  "/e5.png",
  
];

const features = [
  {
    icon: "🎁",
    title: "Daily Rewards",
    description:
      "Claim daily login rewards and grow your coin balance every day.",
  },
  {
    icon: "📺",
    title: "Watch & Earn",
    description:
      "Watch rewarded advertisements and instantly receive coins.",
  },
  {
    icon: "💰",
    title: "Redeem Coins",
    description:
      "Redeem your earned coins for exciting rewards directly from the app.",
  },
  {
    icon: "⚡",
    title: "Fast Performance",
    description:
      "Smooth and lightweight application built for the best experience.",
  },
];

export default function EarnPlayPage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative py-24">

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}

            <div>

              <p className="text-cyan-400 uppercase tracking-[0.45em] mb-5">
                TB STUDIOS
              </p>

              <h1 className="text-6xl md:text-8xl font-black leading-none">
                EARN
                <br />
                PLAY
              </h1>

              <p className="mt-8 text-zinc-400 text-xl leading-9 max-w-xl">
                EarnPlay is a modern Android rewards application where users
                earn coins by watching ads, claiming daily bonuses, completing
                tasks and redeeming rewards.
              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <a
                  href="/EarnPlay-v1.0.apk"
                  download
                  className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold transition duration-300"
                >
                  ⬇ Download APK
                </a>

                <a
                  href="#features"
                  className="border border-zinc-700 hover:border-cyan-500 px-8 py-4 rounded-full transition"
                >
                  Learn More
                </a>

              </div>

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>
                  <h2 className="text-4xl font-black text-cyan-400">
                    10K+
                  </h2>
                  <p className="text-zinc-500 mt-2">
                    Downloads
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-black text-cyan-400">
                    4.8★
                  </h2>
                  <p className="text-zinc-500 mt-2">
                    User Rating
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-black text-cyan-400">
                    100%
                  </h2>
                  <p className="text-zinc-500 mt-2">
                    Free
                  </p>
                </div>

              </div>

            </div>

            {/* Right */}

            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 bg-cyan-500/30 blur-[120px] rounded-full" />

                <div className="relative bg-zinc-950 border border-zinc-800 rounded-[50px] p-4 shadow-2xl">

                  <Image
                    src="/e1.png"
                    alt="EarnPlay"
                    width={330}
                    height={700}
                    className="rounded-[40px]"
                  />

                  <Image
                    src="/earnplay.png"
                    alt="EarnPlay Logo"
                    width={90}
                    height={90}
                    className="absolute top-6 left-1/2 -translate-x-1/2 rounded-3xl shadow-2xl"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-8 py-28"
      >

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
          FEATURES
        </p>

        <h2 className="text-6xl font-black mb-16">
          WHY PEOPLE
          <br />
          LOVE EARNPLAY
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-cyan-500 hover:-translate-y-3 transition-all duration-300"
            >

              <div className="text-6xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-zinc-400 leading-8">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </section>
            {/* ================= SCREENSHOTS ================= */}

      <section className="py-28 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">

        <div className="max-w-7xl mx-auto px-8">

          <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
            SCREENSHOTS
          </p>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            EXPERIENCE
            <br />
            EARNPLAY
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mb-20 leading-9">
            Explore EarnPlay through beautiful screenshots showcasing the
            wallet, daily rewards, watch & earn, withdrawals, profile,
            and many more exciting features.
          </p>

          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">

            {screenshots.map((image, index) => (

              <div
                key={index}
                className="group min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0"
              >

                <div
                  className="
                    bg-zinc-950
                    border
                    border-zinc-800
                    rounded-[42px]
                    p-4
                    transition-all
                    duration-500
                    hover:border-cyan-500
                    hover:-translate-y-4
                    hover:shadow-[0_0_70px_rgba(6,182,212,0.25)]
                  "
                >

                  <div className="overflow-hidden rounded-[34px]">

                    <Image
                      src={image}
                      alt={`EarnPlay Screenshot ${index + 1}`}
                      width={340}
                      height={720}
                      className="
                        rounded-[34px]
                        transition-all
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <Image
              src="/e1.png"
              alt="EarnPlay"
              width={380}
              height={760}
              className="mx-auto rounded-[40px] shadow-2xl"
            />

          </div>

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
              WHY CHOOSE US
            </p>

            <h2 className="text-6xl font-black mb-10">
              Everything
              <br />
              You Need
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="text-3xl">🎁</div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Daily Login Rewards
                  </h3>
                  <p className="text-zinc-400 mt-2 leading-8">
                    Open the app every day and receive free reward coins.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-3xl">📺</div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Rewarded Videos
                  </h3>
                  <p className="text-zinc-400 mt-2 leading-8">
                    Watch ads and instantly receive rewards directly into your wallet.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Instant Coin Updates
                  </h3>
                  <p className="text-zinc-400 mt-2 leading-8">
                    Every reward is credited immediately without waiting.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="text-3xl">🔒</div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Secure Platform
                  </h3>
                  <p className="text-zinc-400 mt-2 leading-8">
                    Powered by Firebase authentication and cloud database.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= FAQ ================= */}

      <section className="max-w-7xl mx-auto px-8 py-28">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-4">
          FAQ
        </p>

        <h2 className="text-6xl font-black mb-16">
          Frequently Asked
          <br />
          Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              Is EarnPlay free?
            </h3>

            <p className="text-zinc-400 leading-8">
              Yes. EarnPlay is completely free to download and use.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              How do I earn coins?
            </h3>

            <p className="text-zinc-400 leading-8">
              You can earn coins by watching rewarded ads, claiming daily login
              rewards, and completing available tasks inside the app.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              Is my account secure?
            </h3>

            <p className="text-zinc-400 leading-8">
              Yes. EarnPlay uses Firebase Authentication and securely stores
              user data in the cloud.
            </p>

          </div>

          <div className="bg-zinc-950 border border-zinc-800 rounded-[30px] p-8 hover:border-cyan-500 transition">

            <h3 className="text-2xl font-bold mb-4">
              Which devices are supported?
            </h3>

            <p className="text-zinc-400 leading-8">
              EarnPlay currently supports Android smartphones running modern
              Android versions.
            </p>

          </div>

        </div>

      </section>

      {/* ================= DOWNLOAD CTA ================= */}

      <section className="relative py-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 opacity-95" />

        <div className="relative max-w-5xl mx-auto px-8 text-center">

          <h2 className="text-6xl md:text-7xl font-black text-black">
            Ready to Start
            <br />
            Earning?
          </h2>

          <p className="text-black/80 text-xl leading-9 max-w-3xl mx-auto mt-8">
            Download the latest version of EarnPlay and start earning rewards
            today. Join thousands of users already enjoying the experience.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <a
              href="/EarnPlay-v1.0.apk"
              download
              className="
                bg-black
                text-white
                px-10
                py-5
                rounded-full
                font-bold
                text-lg
                hover:scale-105
                transition
              "
            >
              ⬇ Download APK
            </a>

            <a
              href="/privacy-policy"
              className="
                bg-white
                text-black
                px-10
                py-5
                rounded-full
                font-bold
                text-lg
                hover:scale-105
                transition
              "
            >
              Privacy Policy
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}