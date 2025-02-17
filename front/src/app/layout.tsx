import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import CodeIcon from '@mui/icons-material/Code';
import Providers from "@/redux/provider";
import { Contact } from "@/components/contact";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picu Zeballos",
  description: "Portfolio of Picu Zeballos",
  icons: {
    icon: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            <nav className="fixed top-0 left-0 w-full z-50">
              <NavBar />
            </nav>
            {children}
            <Toaster />
            <Footer />
            <Contact />
          </Providers>
      </body>
    </html>
  );
}
