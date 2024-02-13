import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  const user = await Prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
    },
  });

  console.log({ user });
}

main()
  .then(() => Prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await Prisma.$disconnect();
    process.exit(1);
  });
