import BlogCard from "@/components/BlogCard";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { Blog } from "@/types/blog";

async function getBlogs(): Promise<Blog[]> {
  const res = await fetch(`${getBaseUrl()}/api/blogs`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          Latest stories
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#52525b]">
          Fresh writing, practical ideas, and notes from people building better
          products.
        </p>
      </div>

      {blogs.length === 0 ? (
        <p className="text-sm text-[#52525b]">No blogs posted yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              author={blog.author.username}
              date={new Date(blog.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              imageSrc={blog.thumbnail || "/thumbnail.jpeg"}
            />
          ))}
        </div>
      )}
    </main>
  );
}