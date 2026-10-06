import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal de Viagens",
  description: "Explore destinos incríveis pelo mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}