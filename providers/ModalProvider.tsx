"use client";

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
            <Modal title="test modal" description="test description" isOpen onChange={()=>{}}> Test children</Modal>
        </>
    );
};

export default ModalProvider;
