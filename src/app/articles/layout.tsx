export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Articles</h2>
      <div className="rounded-lg border bg-white p-6">
        {children}
      </div>
    </section>
  );
}