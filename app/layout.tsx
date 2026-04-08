import React from 'react';
import "./globals.css";

export const metadata = {
  title: 'Moja Platforma Kursowa',
  description: 'Zbudowane w Next.js',
};

// Zwróć uwagę na tę linijkę poniżej! To ona rozwiązuje ten błąd.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        {children}
      </body>
    </html>
  );
}