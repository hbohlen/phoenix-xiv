import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Check if we're in a production environment. In production, we want to use a single instance.
// Otherwise, hot reloading could create multiple instances, leading to too many connections.
if (process.env.NODE_ENV === 'production') {
  console.log("Initializing Prisma Client for production...");
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    console.log("Initializing Prisma Client for development...");
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;