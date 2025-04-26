import "./globals.css";
import { Inter } from "next/font/google";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants/constants";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TopHeader from "@/components/TopHeader/TopHeader";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers";
import TopProgressBar from "@/components/TopProgressBar";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" className={inter.variable}>
        <head>
          <link rel="icon" href="/images/logos/logo.svg" />
        </head>
        <body className={` antialiased `}>
          
          {/* For role = End User */}
          <TopProgressBar/>
          <TopHeader />
          <Header />
          <div className="flex container w-full">
            <main className="p-4 w-full max-w-[1240px] mx-auto">{children}</main>
          </div>
          <Footer />
          <Toaster richColors />
        </body>
      </html>
    </Providers>
  );
}
