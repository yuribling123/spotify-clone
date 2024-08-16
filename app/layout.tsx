import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import UserProvider from "@/hooks/useProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my spotify",
  description: "Listen to Music ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={font.className}>



        <SuperbaseProvider>

          <UserProvider>

            <Sidebar>  {children} </Sidebar>

          </UserProvider>

        </SuperbaseProvider>



      </body>


    </html>
  );
}
