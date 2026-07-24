import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title:
    "Cosmos BrandFlow | Branding & Digital Growth Agency in Delhi NCR",


  description:
    "Cosmos BrandFlow is a premium branding and digital growth agency helping businesses with brand strategy, website design, marketing, automation, and online growth solutions.",


  keywords: [

    "Branding Agency Delhi",
    "Digital Marketing Agency Delhi NCR",
    "Creative Agency India",
    "Website Design Agency",
    "Brand Strategy Consultant",
    "Social Media Marketing Agency",
    "Performance Marketing",
    "Business Automation",
    "Cosmos BrandFlow",

  ],


  authors:[
    {
      name:"Cosmos BrandFlow",
    }
  ],


  creator:"Cosmos BrandFlow",


  metadataBase:
    new URL("https://cosmosbrandflow.in"),



  openGraph:{

    title:
      "Cosmos BrandFlow | Build Brands That Stand Out",


    description:
      "Strategic branding, websites, marketing and automation solutions for growing businesses.",


    url:
      "https://cosmosbrandflow.in",


    siteName:
      "Cosmos BrandFlow",


    type:"website",

  },



  twitter:{

    card:"summary_large_image",

    title:
      "Cosmos BrandFlow | Branding & Growth Agency",

    description:
      "Building premium digital identities for modern businesses.",

  },


};



export default function RootLayout({

children,

}: Readonly<{

children:React.ReactNode;

}>) {


return (

<html

lang="en"

className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}

>


<body

className="
min-h-full
flex
flex-col
bg-white
"

>

{children}

</body>


</html>

);

}