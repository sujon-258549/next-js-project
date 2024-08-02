import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/Component/Navber";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "next-project2",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber></Navber>
        {children}
      </body>
    </html>
  );
}
