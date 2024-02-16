// pages/api/user.ts

import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const session = await getSession({ req });

  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        availability: true,
      },
    });

    res.json(user);
  } else {
    res.status(401).send("Unauthorized");
  }
}
