import localFont from "next/font/local";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["arabic", "latin"], weight: ["400", "700", "800"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
