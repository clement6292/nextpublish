import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[70vh] gap-6">
      <aside className="w-56 rounded-lg border bg-white p-4">
        <nav className="space-y-2 text-sm">
          <p className="font-medium">Dashboard</p>
          <ul className="space-y-1 text-neutral-600">
            <li>
              <Link href="/dashboard" className="block hover:text-neutral-900">
                Accueil
              </Link>
            </li> 
            <li>
              <Link href="/dashboard/articles" className="block hover:text-neutral-900">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="block hover:text-neutral-900">
                Profil
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="flex-1 rounded-lg border bg-white p-6">
        {children}
      </section>
    </div>
  );
}