import NavBar from "./NavBar"
import Footer from "./Footer";
import Head from "./head";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme = "cyberpunk">
      <Head/>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
