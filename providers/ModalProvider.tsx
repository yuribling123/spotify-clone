"use client";

import AuthModal from "@/app/components/AuthModal";
import Modal from "@/app/components/Modal";
import { useEffect, useState } from "react";


const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal></AuthModal>
        </>
    );
};

export default ModalProvider;
