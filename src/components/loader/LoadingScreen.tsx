"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  console.log("mounted");
  const timer = setTimeout(() => {
    console.log("hide");
    setLoading(false);
  }, 1500);

  return () => clearTimeout(timer);
}, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        flex
        items-center
        justify-center
      "
    >
      <div className="text-center">

        <Image
          src="/logo.png"
          alt="TB Studios"
          width={120}
          height={120}
          className="mx-auto animate-pulse"
        />

        <h1
          className="
            text-white
            text-4xl
            font-black
            mt-6
            tracking-wider
          "
        >
          TB STUDIOS
        </h1>

        <div
          className="
            mt-8
            w-48
            h-1
            bg-zinc-800
            rounded-full
            overflow-hidden
            mx-auto
          "
        >
          <div
            className="
              h-full
              bg-cyan-500
              animate-[loading_2.5s_linear]
            "
          />
        </div>

      </div>
    </div>
  );
}