import NavBar from "./NavBar"
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme = "black">
      <head />
      <body>
        <nav><NavBar/></nav>
        {children}
      </body>
    </html>
  )
}
