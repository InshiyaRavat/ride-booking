import localFont from "next/font/local";
import {Iceberg} from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import Header from "../components/Header"
import { LocationContext } from "../components/Home/LocationContext"
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const pacifico = Iceberg({ subsets: ["latin"], weight: '400' });
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
       <LocationContext>
      <html lang="en">
        <body
          className={`${pacifico.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header/>
          {children}
        </body>      
      </html>   
      </LocationContext>   
    </ClerkProvider>
  );
}
