import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bosque de Arrayanes - Tour en Catamarán | Villa La Angostura",
  description:
    "Descubre el único Bosque de Arrayanes en el mundo. Tour en catamarán desde Villa La Angostura por el lago Nahuel Huapi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
