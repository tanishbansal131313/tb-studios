import Link from "next/link";
import Image from "next/image";

const apps = [
  {
    name: "Nova VPN",
    description:
      "Fast, secure and reliable VPN experience for Android users.",
    image: "/nova-vpn.png",
    color: "from-cyan-500 to-blue-600",
    href: "/apps/nova-vpn",
    playstore:
      "https://play.google.com/store/apps/details?id=com.tbstudios.novaa_vpn&pcampaignid=web_share",
  },
  {
    name: "EarnPlay",
    description:
      "Rewards platform where users complete tasks and earn points.",
    image: "/earnplay.png",
    color: "from-purple-500 to-pink-500",
    href: "/apps/earnplay",
    playstore: "",
  },
  {
    name: "Future App",
    description:
      "Coming soon. Building the next generation of digital products.",
    image: "/future-app.png",
    color: "from-orange-500 to-red-500",
    href: "#",
    playstore: "",
  },
];

export default function AppsShowcase() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-6xl md:text-8xl font-black mb-16">
          PRODUCTS
          <br />
          WE BUILD
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              className="block group"
            >
              <div
                className="
                  bg-zinc-950
                  border
                  border-zinc-800
                  rounded-[32px]
                  overflow-hidden
                  hover:border-cyan-500
                  hover:-translate-y-3
                  hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
                  transition-all
                  duration-300
                  cursor-pointer
                  h-full
                "
              >
                {/* Top Area */}
                <div
                  className={`
                    h-72
                    bg-gradient-to-br
                    ${app.color}
                    flex
                    items-center
                    justify-center
                    relative
                    overflow-hidden
                  `}
                >
                  {/* Glow Circle */}
                  <div
                    className="
                      absolute
                      w-44
                      h-44
                      rounded-full
                      bg-white/20
                      blur-2xl
                    "
                  />

                  {/* Logo */}
                  <Image
  src={app.image}
  alt={app.name}
  width={140}
  height={140}
  className="
    relative
    z-10
    w-[140px]
    h-auto
    rounded-[32px]
    shadow-2xl
    group-hover:scale-110
    transition-transform
    duration-300
  "
/>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold group-hover:text-cyan-400 transition">
                      {app.name}
                    </h3>

                    <span className="text-3xl group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </div>

                  <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                    {app.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    {app.playstore && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(app.playstore, "_blank");
                        }}
                        className="
                          bg-cyan-500
                          text-black
                          px-5
                          py-2
                          rounded-full
                          font-semibold
                          hover:scale-105
                          transition
                        "
                      >
                        Play Store
                      </button>
                    )}

                    <span className="text-cyan-400 font-semibold">
                      View App →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}