import NavBar from "./NavBar"
import Footer from "./Footer";
import Head from "./head";
import IntakeForm from "./book-online/page";
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme = "black">
      <Head/>
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
