import prisma from "../../lib/prisma";

export default async function newUser(req, res) {
  const newUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
    },
  });
}
