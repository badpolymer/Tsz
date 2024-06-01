import type { Metadata } from "next";
// import { Noto_Serif_HK } from "next/font/google";
import "./globals.scss";


//const noto = Noto_Serif_HK({ preload:false});
//https://github.com/vercel/next.js/discussions/47309

const isProd = process.env.NODE_ENV === 'production';


export const metadata: Metadata = {
  metadataBase: isProd ? new URL('https://badpolymer.github.io/Tsz/') : new URL(`http://localhost:${process.env.PORT || 3000}`),
  alternates: {
    canonical: `/`,
    languages: {
      'en-Ca': `/en-ca`,
      'en-US': `en-us`,
      'en-GB': `/en-uk`,
      'zh-HK': `/ct`,
      'zh-TW': `/md`,
      'zh': `/ct`,
    },
  },
  title: {
    template: '%s - 匯典 Tsz',
    default: '匯典 Tsz', // a default is required when creating a template
  },
  description: ``,
  keywords: [`Cantonese`, `Dictionary`, `辭典`],
  openGraph: {
    type: "website",
    url: "https://badpolymer.github.io/Tsz/",
    title: "匯典 Tsz",
    description: "My Website Description",
    siteName: "匯典 Tsz",
    images: [{
      url: "/favicon.ico",
    }],
    determiner: 'auto',
    emails: `string | Array<string>`,
    phoneNumbers: [`+1 6329545648`],
    faxNumbers: `string | Array<string>;`,
    locale: `Locale`,
    alternateLocale: [``],
    audio: `OGAudio | Array<OGAudio>`,
    videos: `OGVideo | Array<OGVideo>;`,
    countryName: `string`,
    ttl: 123,
  },
  twitter: {
    site: `string`,
    siteId: `string`,
    creator: `string`,
    creatorId: `string`,
    description: `string`,
    title: `string`,
    images: `TwitterImage | Array<TwitterImage>`,
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  }

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
