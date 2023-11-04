import "./globals.css";
import { GeistSans } from "geist/font";

export const metadata = {
  title: "Blog",
  description: "An early blog version",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}
