// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    }),
    // You can add more providers here as needed
  ],
  // Optional: You can customize session behavior or callbacks here
  // For now, let's keep it minimal
});
