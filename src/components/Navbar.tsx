export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold tracking-wide text-white">
          Cosmos Brandflow
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-white">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work Process</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-white px-6 py-3 text-black font-semibold hover:scale-105 transition">
          Book Session
        </button>

      </div>
    </nav>
  );
}