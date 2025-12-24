import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProgressBar from "./components/ui/ProgressBar";

// IMPORTANT: Ensure this path matches where you created the Navbar.
// If you put it in 'shared', change 'ui' to 'shared'.
import Navbar from "./components/shared/Navbar"; 
import ScrollFix from "./components/ui/ScrollFix"; // (Adjust path if you put it elsewhere)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ammar Ahmad | AI Engineer ",
  description: "Advanced Agentic Workflows & n8n Orchestration Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added 'scroll-smooth' for nice scrolling effects
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* The Navbar sits here, above all page content */}
        <Navbar />
        <ScrollFix />
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}