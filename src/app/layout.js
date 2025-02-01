import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import Footer from "./components/modules/Footer/Footer";
import Header from "./components/modules/Header/Header";
import "./globals.css";
import { Providers } from "../../providers";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "Cyanidium Dev. Template",
  description: "NextJS NextUI template",
  icons: {
    icon: "/icons/favicon.ico",
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const michelin = localFont({
  src: [
    {
      path: "../../public/fonts/Michelin-Black.ttf",
      weight: "900",
    },
    {
      path: "../../public/fonts/Michelin-Black.woff2",
      weight: "900",
    },
    {
      path: "../../public/fonts/Michelin-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Michelin-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Michelin-SemiBold.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Michelin-SemiBold.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Michelin-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Michelin-Regular.woff2",
      weight: "400",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ua" className={`${raleway.className} ${michelin.className}`}>
      <head>
        <GoogleTagManager gtmId="GTM-WDPXJDDS" />
      </head>
      <body className="bg-zinc text-zinc">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
