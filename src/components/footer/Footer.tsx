import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black">
              TB STUDIOS
            </h2>

            <p className="text-zinc-400 mt-4">
              Building innovative apps, games and
              digital experiences for users worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">
              Navigation
            </h3>

            <div className="space-y-3 text-zinc-400">
              <Link href="/" className="block hover:text-cyan-400">
                Home
              </Link>

              <Link href="/apps" className="block hover:text-cyan-400">
                Apps
              </Link>

              <Link href="/games" className="block hover:text-cyan-400">
                Games
              </Link>

              <Link href="/about" className="block hover:text-cyan-400">
                About
              </Link>

              <Link href="/contact" className="block hover:text-cyan-400">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-zinc-400">
              <Link
                href="/privacy-policy"
                className="block hover:text-cyan-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="block hover:text-cyan-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/support"
                className="block hover:text-cyan-400"
              >
                Support
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 text-zinc-500 text-center">
          © 2026 TB Studios. All rights reserved.
        </div>

      </div>
    </footer>
  );
}