import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "Todo App",
  description: "Author: Thu Smiley",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/images/favicon.svg" />
        <meta property="og:image" content="/images/desktop-preview.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
