import jwt from "jsonwebtoken";

export function createToken(id: number) {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
}
