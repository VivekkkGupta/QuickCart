import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants/constants";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SideBarMenu } from "@/components/SideBarMenu/SideBarMenu";
import { AppContextProvider } from "@/contexts/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/images/logos/logo.svg' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning`}
      >
        <AppContextProvider>
          <Header />
          <div className="flex">
            <SideBarMenu />
            <main>
              {children}
            </main>
          </div>
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
