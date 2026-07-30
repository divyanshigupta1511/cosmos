import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-violet-50 to-white px-4 sm:px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-600">
          Error 404
        </p>

        <h1 className="mt-6 text-5xl font-bold text-gray-900 sm:text-6xl md:text-7xl">
          Page Not Found
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="
            mt-10
            inline-flex
            rounded-full
            bg-gradient-to-r
            from-violet-600
            to-purple-500
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-[0_15px_45px_rgba(124,58,237,0.35)]
          "
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}