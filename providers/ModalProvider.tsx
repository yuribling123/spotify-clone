"use client";

import AuthModal from "@/app/components/AuthModal";
import Modal from "@/app/components/Modal";
import UploadModal from "@/app/components/UploadModal";
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
            <UploadModal></UploadModal>
        </>
    );
};

export default ModalProvider;
