import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/Component/Navber";
import Footer from "@/Component/Footer";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"], // weights must be strings
  subsets: ["latin"],
});

export const metadata = {
  title: "next-project2",
  description: "This is Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col justify-center">
          <Navber></Navber>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
