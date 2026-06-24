const BlogCardSkeleton = () => {
  return (
    <div className="mx-auto min-h-full w-full max-w-md overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-zinc-200/70">
      <div className="aspect-video w-full animate-pulse bg-zinc-200/80" />

      <div className="p-4">
        <div className="h-6 w-11/12 animate-pulse rounded bg-zinc-200" />
        <div className="mt-2 h-6 w-3/4 animate-pulse rounded bg-zinc-200" />

        <div className="mt-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-zinc-100" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-100" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-100" />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="h-3 w-20 animate-pulse rounded bg-zinc-200" />
          <div className="h-3 w-16 animate-pulse rounded bg-zinc-200" />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
