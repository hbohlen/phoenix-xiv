// pages/api/auth/[...nextauth].ts

import NextAuth, { Session, User } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
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
  callbacks: {
    session: ({ session, token }) => {
      session.user.id = token.id as string;
      console.log("Session Callback", { session, token });
      return session;
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }

      console.log("JWT Callback", { token, user });
      return token;
    },
  },
});
