import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {

  title: {
  default:
    "Cosmos BrandFlow | Branding & Digital Growth Agency",

  template:
    "%s | Cosmos BrandFlow",
},


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
  applicationName: "Cosmos BrandFlow",

publisher: "Cosmos BrandFlow",

category: "Business",


  metadataBase:
    new URL("https://cosmosbrandflow.in"),
    alternates: {
  canonical: "/",
},



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
    images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Cosmos BrandFlow",
  },
],

  },



  twitter:{

    card:"summary_large_image",

    title:
      "Cosmos BrandFlow | Branding & Growth Agency",

    description:
      "Building premium digital identities for modern businesses.",
      images: ["/og-image.png"],

  },
  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},


};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cosmos BrandFlow",
  alternateName: "Cosmos BrandFlow",
  url: "https://cosmosbrandflow.in",
  logo: "https://cosmosbrandflow.in/logo.png",
  image: "https://cosmosbrandflow.in/og-image.png",
  description:
    "Cosmos BrandFlow is a premium branding and digital growth agency helping businesses with branding, website development, marketing, automation, and business growth solutions.",
  email: "cosmosbrandflow.in@gmail.com",
  telephone: "+91 8882475018",
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  sameAs: [
    "https://www.instagram.com/cosmosbrandflow.co",
  ],
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
 


<Script id="microsoft-clarity" strategy="afterInteractive">
  {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xuyk4n7sbp");
  `}
</Script>

  
  <PageLoader />
  <ScrollProgress />
  <CustomCursor />

  {children}
  <GoogleAnalytics gaId="G-0218LHQ8YT" />
</body>

</html>

);

}