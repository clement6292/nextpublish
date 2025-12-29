import Link from "next/link";

export default function Header() {
  return (
    <header className=" text-black">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold hover:text-blue-100 transition">
          NextPublish
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/dashboard"
            className="hover:text-blue-100 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/articles"
            className="hover:text-blue-100 transition"
          >
            Articles
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-100 transition"
          >
            A propos
          </Link>
          <Link
            href="/docs"
            className="hover:text-blue-100 transition"
          >
            Documentations
          </Link>
        </nav>
      </div>
    </header>
  );
}
