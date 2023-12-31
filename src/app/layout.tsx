import { AuthContextProvider } from "@/contexts/AuthContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PizzApp - Sign In",
  description: "Make your login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-mozzarella`}>
        <AuthContextProvider>
          {children}
          </AuthContextProvider>
      </body>
    </html>
  );
}
