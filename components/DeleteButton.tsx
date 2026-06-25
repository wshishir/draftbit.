"use client";
import { useRouter } from "next/navigation";

export default function DeleteBlogButton({ blogId }: { blogId: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this blog?");

    if (!confirmed) return;

    const token = localStorage.getItem("token");

    const res = await fetch(`/api/blogs/${blogId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const data = await res.json();
      alert(data.message);
      return;
    }

    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleDelete}
      className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
    >
      Delete
    </button>
  );
}
