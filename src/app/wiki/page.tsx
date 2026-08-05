export default function WikiPage() {
  return (
    <div className="h-screen overflow-hidden">
      {/* Your Header */}
      <header className="h-16 bg-black text-white flex items-center px-6 fixed top-0 left-0 right-0 z-50">
        <h1 className="font-bold text-xl">TB STUDIOS</h1>
      </header>

      {/* Website */}
      <div className="pt-16 h-full">
        <iframe
          src="https://arrowtv.net/"
          className="w-full h-full border-0"
          title="Cinezo"
        />
      </div>
    </div>
  );
}