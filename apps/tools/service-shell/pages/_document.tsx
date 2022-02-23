/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {
          // Evaluating if this chunk is needed (Seems needed based on official documentation of @module-federation/nextjs-mf)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
        }
        {/* <script
          data-webpack="obelix"
          src="http://localhost:3000/_next/static/chunks/remoteEntry.js"
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
