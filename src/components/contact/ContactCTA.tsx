import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          GET IN TOUCH
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-8">
          LETS BUILD
          <br />
          SOMETHING GREAT
        </h2>

        <p className="text-zinc-400 text-xl max-w-2xl mx-auto mb-12">
          Have a project, partnership opportunity,
          or business inquiry? Wed love to hear from you.
        </p>

        <Link
          href="/contact"
          className="
            inline-flex
            items-center
            justify-center
            px-10
            py-5
            rounded-full
            bg-cyan-500
            text-black
            font-bold
            hover:scale-105
            transition
          "
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}