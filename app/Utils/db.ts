import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const users = [
  {
    id: "1",
    username: "user@example.com",
    email: "temi236topemicheal@gmail.com",
    password: "1Password",
  },
  {
    id: "1",
    username: "micheal",
    email: "temi236topemcheal@gmail.com",
    password: "12345",
  },
];
