import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";
import Header from "@/components/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random#13",
  description: "Some random stuff from me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
