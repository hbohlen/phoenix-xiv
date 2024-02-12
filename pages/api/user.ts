// pages/api/someApiRoute.ts

import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (session && session.user) {
    res.status(200).json({ discordId: (session.user as { id: string }).id });
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
};
