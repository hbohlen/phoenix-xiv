// _app.tsx

import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import RootLayout from "../app/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}

export default MyApp;
