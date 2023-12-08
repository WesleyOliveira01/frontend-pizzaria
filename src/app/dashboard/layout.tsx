import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../../contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "the Dashboard at PizzApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-mozzarella`}>
        <header>header aqui</header>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
