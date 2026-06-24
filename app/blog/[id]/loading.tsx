export default function Loading() {
  return (
    <article
      className="mx-auto w-full px-6 py-12 sm:px-8"
      style={{ maxWidth: "1000px" }}
    >
      <div className="mb-8 h-6 w-20 animate-pulse rounded bg-zinc-200" />

      <div className="aspect-video w-full animate-pulse rounded-lg bg-zinc-200" />

      <header className="mt-5">
        <div className="h-10 w-full animate-pulse rounded bg-zinc-200 sm:h-12" />
        <div className="mt-3 h-10 w-3/4 animate-pulse rounded bg-zinc-200 sm:h-12" />

        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <div className="h-4 w-24 animate-pulse rounded bg-zinc-200" />
            <div className="h-4 w-32 animate-pulse rounded bg-zinc-200" />
          </div>
          <div className="h-8 w-20 animate-pulse rounded bg-zinc-200" />
        </div>
      </header>

      <div className="mt-8 space-y-3">
        <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-11/12 animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-5/6 animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-zinc-100" />
      </div>
    </article>
  );
}
