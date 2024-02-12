// pages/index.tsx

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn("discord")}>Sign in with Discord</button>
      )}
    </div>
  );
}
