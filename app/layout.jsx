import "./globals.css";
import { Inter } from "next/font/google";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants/constants";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SideBarMenu } from "@/components/SideBarMenu/SideBarMenu";
import { AppContextProvider } from "@/contexts/AppContext";
import TopHeader from "@/components/TopHeader/TopHeader";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.variable}>
        <head>
          <link rel='icon' href='/images/logos/logo.svg' />
        </head>
        <body
          className={` antialiased suppressHydrationWarning`}
        >
          <AppContextProvider>
            <TopHeader />
            <Header />

            <div className="flex container w-full">
              {/* <SideBarMenu /> */}
              <main className="p-4 w-full ">
                {children}
              </main>
            </div>
            <Footer />
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
