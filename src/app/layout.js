import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CSKN",
  description: "CSKN Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="flex flex-col min-h-screen">
        {/* Navbar now appears on every page */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer now appears on every page */}
        <Footer />
      </body>
    </html>
  );
}
