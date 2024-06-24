import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Providers } from "./providers"
import { GoogleTagManager } from "@next/third-parties/google"

export const metadata: Metadata = {
  title: "Esim Direct",
  description: "The future platform for mobile connectivity",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <GoogleTagManager gtmId="G-Y73759VW5W" />
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-Y73759VW5W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  )
}
