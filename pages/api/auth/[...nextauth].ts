// pages/api/auth/[...nextauth].ts

import NextAuth, { Session, User } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import DiscordProvider from "next-auth/providers/discord";
import prisma from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "identify email guilds",
        },
      },
    }),
  ],
});
