import "./globals.css";
import { Signika } from "next/font/google";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const font = Signika({ subsets: ["latin"] });

export const metadata = {
  title: "World Cup 2022",
  description: "World Cup 2022",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={font.className}>
        <Header />
        <main>{children}</main>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
