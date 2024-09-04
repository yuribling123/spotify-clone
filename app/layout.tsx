import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import SuperbaseProvider from "@/providers/SuperbaseProvider";
import UserProvider from "@/hooks/useProvider";
import AuthModal from "./components/AuthModal";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my spotify",
  description: "Listen to Music ",
};
export const revalidate = 0 ; // no cache
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">


      <body className={font.className}>
        <ToasterProvider/> 



        <SuperbaseProvider>

          <UserProvider>

            <ModalProvider/>

            <Sidebar songs={userSongs}>  {children} </Sidebar>

          </UserProvider>

        </SuperbaseProvider>



      </body>


    </html>
  );
}
