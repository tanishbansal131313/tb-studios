import Image from "next/image";
import Link from "next/link";

export default function GamesPage() {
  const games = [
    {
      name: "Coming Soon",
      description:
        "Exciting mobile games are currently under development.",
      image: "/game-placeholder.png",
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-7xl mx-auto px-8 py-32">
        <p className="text-cyan-400 uppercase tracking-[0.4em] mb-6">
          OUR GAMES
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-20">
          GAMES
          <br />
          WE CREATE
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.name}
              className="
                bg-zinc-950
                border
                border-zinc-800
                rounded-[32px]
                overflow-hidden
              "
            >
              <div className="h-72 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Image
                  src={game.image}
                  alt={game.name}
                  width={150}
                  height={150}
                  className="rounded-[32px]"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold">
                  {game.name}
                </h2>

                <p className="mt-4 text-zinc-400">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}