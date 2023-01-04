import NavBar from "./NavBar"
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav><NavBar/></nav>
        
        {children}
      </body>
    </html>
  )
}
