import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const darkGrotesque = Darker_Grotesque({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Siga seu atleta",
  description: "Siga seu atleta favorito e receba notificações de suas próximas competições",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={darkGrotesque.className}
      >
        {children}
      </body>
    </html>
  );
}
