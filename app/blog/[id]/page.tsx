import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CiCalendar } from "react-icons/ci";
import { LuArrowLeft, LuUser } from "react-icons/lu";
import ShareButton from "./ShareButton";
import { Blog } from "@/types/blog";

async function getBlog(id: string): Promise<Blog | null> {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    notFound();
  }

  return (
    <article
      className="mx-auto w-full px-6 py-12 sm:px-8"
      style={{ maxWidth: "1000px" }}
    >
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-md font-medium text-black"
      >
        <LuArrowLeft className="size-4" />
        Back
      </Link>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted ">
        <Image
          src={blog.thumbnail || "thumbnail.jpeg"}
          alt={blog.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </div>

      <header className="mt-5">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {blog.title}
        </h1>

        <div className="mt-5 flex w-full flex-col gap-6 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <p className="flex items-center gap-1">
              <LuUser className="size-4" />
              {blog.author.username}
            </p>
            <p className="flex items-center gap-1">
              <CiCalendar className="size-5" />
              {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <ShareButton />
        </div>
      </header>

      <div className="mt-8 space-y-6 text-lg leading-8 text-[#3f3f46]">
        <p>{blog.description}</p>
        <p className="whitespace-pre-line">{blog.content}</p>
      </div>
    </article>
  );
}
