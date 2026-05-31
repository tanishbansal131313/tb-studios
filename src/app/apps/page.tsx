import Link from "next/link";
import Image from "next/image";

export default function AppsPage() {
  const apps = [
    {
      name: "Nova VPN",
      description:
        "Fast, secure and reliable VPN experience for Android users.",
      color: "from-cyan-500 to-blue-600",
      image: "/nova-vpn.png",
      href: "/apps/nova-vpn",
    },
    {
      name: "EarnPlay",
      description:
        "Rewards platform where users complete tasks and earn points.",
      color: "from-purple-500 to-pink-500",
      image: "/earnplay.png",
      href: "/apps/earnplay",
    },
    {
      name: "Future App",
      description:
        "Coming soon. Building the next generation of digital products.",
      color: "from-orange-500 to-red-500",
      image: "/future-app.png",
      href: "#",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-8 py-32">
        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          OUR APPS
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-20">
          PRODUCTS
          <br />
          WE BUILD
        </h1>

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

                  <Image
                    src={app.image}
                    alt={app.name}
                    width={180}
                    height={180}
                    className="
                      relative
                      z-10
                      rounded-[40px]
                      shadow-2xl
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    "
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold group-hover:text-cyan-400 transition">
                      {app.name}
                    </h2>

                    <span className="text-3xl group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </div>

                  <p className="text-zinc-400 mt-6 text-lg leading-relaxed">
                    {app.description}
                  </p>

                  <div className="mt-8 text-cyan-400 font-semibold">
                    View App →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}