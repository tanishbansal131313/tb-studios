"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav
  className="
  fixed
  top-0
  left-0
  right-0
  z-50
  bg-black/80
  backdrop-blur-md
  border-b
  border-zinc-800
  "
>
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">

        <h1 className="text-white text-2xl font-black">
          TB STUDIOS
        </h1>

        <nav className="hidden md:flex gap-10 text-white">
          <Link href="/">Home</Link>
          <Link href="/apps">Apps</Link>
<Link href="/games">Games</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
        </nav>

      </div>
    </nav>
  );
}