"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.15),transparent_60%)]" />

      {/* Animated Orb */}
      <motion.div
  animate={{
    scale: [1, 1.2, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
  }}
  className="absolute top-1/2 right-10 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full"
/>

      <div className="relative z-10 max-w-7xl mx-auto px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Side */}
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.4em] mb-8">
              TB STUDIOS
            </p>

            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.9] tracking-tight">
              BUILDING
              <br />
              APPS &
              <br />
              GAMES
            </h1>

            <p className="mt-8 text-zinc-400 text-lg max-w-xl">
              Creating premium apps, games and digital experiences
              for users around the world.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link
  href="/apps"
  className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
>
  Explore Apps
  <ArrowRight size={18} />
</Link>

             <Link
  href="/about"
  className="border border-zinc-700 px-8 py-4 rounded-full hover:bg-zinc-900 transition"
>
  Learn More
</Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            <div className="w-[320px] h-[650px] rounded-[50px] border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
              <div className="h-14 border-b border-zinc-800 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">
                  Nova VPN
                </span>
              </div>

              <div className="p-6">
  <div className="flex justify-center mb-8">
    <Image
      src="/logo.png"
      alt="Nova VPN"
      width={150}
      height={150}
      className="
        rounded-[32px]
        shadow-[0_0_50px_rgba(6,182,212,0.4)]
      "
    />
  </div>

  <h3 className="text-center text-2xl font-bold mb-2">
    Nova VPN
  </h3>

  <p className="text-center text-zinc-400 text-sm mb-8">
    Secure • Fast • Reliable
  </p>

  <div className="space-y-4">
    <div className="h-4 bg-zinc-800 rounded" />
    <div className="h-4 bg-zinc-800 rounded w-3/4" />
    <div className="h-4 bg-zinc-800 rounded w-1/2" />
  </div>

  <button
    onClick={() =>
      window.open(
        "https://play.google.com/store/apps/dev?id=8761821268644760094",
        "_blank"
      )
    }
    className="
      w-full
      mt-8
      bg-cyan-500
      text-black
      py-4
      rounded-2xl
      font-bold
      hover:scale-105
      transition
    "
  >
    DOWNLOAD
  </button>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}