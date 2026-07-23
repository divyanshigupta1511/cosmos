export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center px-6">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-400">
          Strategic Branding & Business Consultancy
        </p>

        <h1 className="text-6xl font-bold leading-tight md:text-8xl">
          We Don't
          <br />
          Market Brands.
        </h1>

        <h2 className="mt-4 text-5xl font-light text-gray-400 md:text-7xl">
          We Build Them.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
          Branding • Websites • Marketing • Automation • Business Growth
        </p>

        <button className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
          Book a Strategy Session
        </button>
      </div>
    </section>
  );
}