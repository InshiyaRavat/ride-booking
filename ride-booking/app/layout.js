import localFont from "next/font/local";
import {Pacifico} from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header"

const pacifico = Pacifico({ subsets: ["latin"], weight: '400' });
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HopOn",
  description: "HopOn: Because walking is so last century! 🚗✨",
  icons: "/HOP-ON-LOGO.png"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${pacifico.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header/>
          {children}
        </body>      
      </html>      
    </ClerkProvider>
  );
}
