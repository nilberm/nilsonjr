import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nilson Júnior - Música Ao Vivo",
  description:
    "Desfrute da melhor música ao vivo em Fortaleza, Ceará, com Nilson Júnior. Um artista versátil que apresenta MPB, Sertanejo, Forró, Brega e muitos outros estilos musicais em performances memoráveis. Encontre entretenimento de alta qualidade e mergulhe na diversidade musical com Nilson Júnior - sua escolha para música ao vivo em Fortaleza.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
