import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      author: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });

  return Response.json(blog);
}

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: number;
    };

    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    if (blog.userId !== decoded.id) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await prisma.blog.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}