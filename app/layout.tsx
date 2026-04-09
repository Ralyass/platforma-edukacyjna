import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="bg-gray-950 text-white antialiased">
        <Navbar />
        {/* Tutaj nie dajemy Sidebaru, bo on psuje stronę główną */}
        {children}
      </body>
    </html>
  );
}