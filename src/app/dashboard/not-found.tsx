import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 space-y-6">
      <h2 className="text-xl font-semibold text-neutral-900">
        Section indisponible
      </h2>

      <p className="text-neutral-600 text-sm">
        Cette section du dashboard n’existe pas.
      </p>

      <Link
        href="/dashboard"
        className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100 transition"
      >
        Retour au dashboard
      </Link>
    </div>
  );
}