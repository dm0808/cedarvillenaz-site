import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import "leaflet/dist/leaflet.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cedarvillenazarene.org"),
  title: {
    default: "Cedarville Church of the Nazarene",
    template: "%s | Cedarville Church of the Nazarene",
  },
    description:
      "We are a welcoming community of faith, growing together in Christ and serving Cedarville with love.",
  openGraph: {
    title: "Cedarville Church of the Nazarene",
    description:
      "We are a welcoming community of faith, growing together in Christ and serving Cedarville with love.",
    type: "website",
    url: "https://cedarvillenazarene.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <div className="print:hidden">
              <Navbar />
            </div>
            <main className="flex-1">{children}</main>
            <div className="print:hidden">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
