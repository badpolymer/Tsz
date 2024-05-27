import type { Metadata } from "next";
// import { Noto_Serif_HK } from "next/font/google";
import "./globals.scss";


//const noto = Noto_Serif_HK({ preload:false});
//https://github.com/vercel/next.js/discussions/47309

export const metadata: Metadata = {
  title: {
    template: '%s - 匯典 Tsz',
    default: '匯典 Tsz', // a default is required when creating a template
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html>
      {/* <body className={noto.className}> */}
      {/* <body className={myFont.className}> */}
          {children}
      {/* </body> */}
    </html>

  );
}
