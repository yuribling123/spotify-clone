"use client";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

import * as Dialog from "@radix-ui/react-dialog";
import useAuthModal from "@/hooks/useAuthModal";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {

    //console.log("inside autho modal")

    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const{session} = useSessionContext();
    const{onClose,isOpen} = useAuthModal();
      
    const onChange =(open:boolean)=>{
        // if modal is cloed it triggers the onClose() function
        if(!open){
            onClose();
        }
    }


    return (
        <Modal
            title="Welcome back"
            description="Login to your account"
            isOpen={isOpen}
            onChange={onChange}
        >
            <Auth  providers={["github"]} magicLink
            theme="dark" supabaseClient={supabaseClient}  appearance={{theme:ThemeSupa,variables:{default:{colors:{ brand:'#404040',brandAccent:'#22c55e'}}}}}/>
        </Modal>
       

    );
};

export default AuthModal;
