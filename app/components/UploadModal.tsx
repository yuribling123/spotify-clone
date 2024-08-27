"use client"
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./input";

const UploadModal = () => {

  const uploadModal = useUploadModal();
  const [isLoading,setIsLoading] = useState();

  const {
    register,
    handleSubmit,
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      author: '',
      title: '',
      song: null,
      image: null,
    }
  })

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  }

  const onSubmit: SubmitHandler<FieldValues> =(values)=>{}
  return (
    <Modal
      title="Add a Song"
      description="Upload a MP3 File"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">

      <Input id= "title" disabled={isLoading} {...register('title',{required:true})}/>
      <Input id= "author" disabled={isLoading} {...register('title',{required:true})}/>
      </form>  
    </Modal>
  );
}

export default UploadModal;
