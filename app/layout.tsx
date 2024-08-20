import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import UserProvider from "@/hooks/useProvider";
import AuthModal from "./components/AuthModal";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

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
        <ToasterProvider/> 



        <SuperbaseProvider>

          <UserProvider>

            <ModalProvider/>

            <Sidebar>  {children} </Sidebar>

          </UserProvider>

        </SuperbaseProvider>



      </body>


    </html>
  );
}
