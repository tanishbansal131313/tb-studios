import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-8">

        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          ERROR 404
        </p>

        <h1 className="text-7xl md:text-9xl font-black">
          PAGE
          <br />
          NOT FOUND
        </h1>

        <p className="text-zinc-400 mt-8 max-w-xl mx-auto">
          The page you are looking for doesnot exist or
          may have been moved.
        </p>

        <Link
          href="/"
          className="
            inline-block
            mt-10
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
          Back To Home
        </Link>

      </div>
    </main>
  );
}