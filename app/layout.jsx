import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HaSat",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
