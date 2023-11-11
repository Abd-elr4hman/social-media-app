import { PrismaClient } from "@prisma/client";

// this here is like a fix or a hack for next hot reloading
// why ? because next can do hot reloading causing the creation of a bunch of prisma client instances and it then stops to work
// the creation of too many prisma client instances breaks everything because too many instances are active.

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
