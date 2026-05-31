"use client";

import { Shield, Zap, Globe, Smartphone } from "lucide-react";
import FadeUp from "../ui/FadeUp";

const features = [
  {
    icon: Shield,
    title: "Secure",
    description:
      "Built with security and privacy as a priority.",
  },
  {
    icon: Zap,
    title: "Fast",
    description:
      "Optimized performance across all devices.",
  },
  {
    icon: Globe,
    title: "Global",
    description:
      "Designed for users around the world.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description:
      "Crafted specifically for Android experiences.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-zinc-950 text-white py-40">
      <div className="max-w-7xl mx-auto px-8">

        <FadeUp>
          <div className="mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
              FEATURES
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              WHY USERS
              <br />
              CHOOSE US
            </h2>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <FadeUp key={feature.title}>
                <div
                  className="
                  bg-black
                  border
                  border-zinc-800
                  rounded-[32px]
                  p-8
                  hover:border-cyan-500
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >
                  <Icon
                    size={40}
                    className="text-cyan-400 mb-6"
                  />

                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}