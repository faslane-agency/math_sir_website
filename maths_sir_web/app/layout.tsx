import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/shared/Navbar";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"]});

export const metadata: Metadata = {
  title: "Because of Maths",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl:'/logo.svg'
        },
        variables: {
          colorPrimary: "#FDD7BB",
          colorText:'#000',
          colorTextOnPrimaryBackground: "#000"
        },
      }}

      >
        <Navbar />
        <body className={inter.className}>{children}</body>
        <Footer />
      </ClerkProvider>
    </html>
  );
}
