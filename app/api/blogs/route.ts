import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const body = await req.json();

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      userId: body.user,
      thumbnail: body.thumbnail,
    },
  });
  return Response.json(blog);
}
