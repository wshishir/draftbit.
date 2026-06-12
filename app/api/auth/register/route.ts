import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const body = await req.json();

  const hashedPassword = await bcrypt.hash(body.password,10);
  const user = await prisma.user.create({
    data: {
      email: body.email,
      username: body.username,
      password: hashedPassword,
    },
  });
  return Response.json({
    message: "Register Successfull",
    user: {
      id: user.id,
      username: user.username,
      email: user.username,
    },
  });
}
