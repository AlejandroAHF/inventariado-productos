import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestion de pedidos",
  description: "aplicacion de gestion de pedidos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
