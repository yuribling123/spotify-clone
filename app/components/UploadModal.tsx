"use client"
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange=(open:boolean)=>{if(!open){
    //reset form
    uploadModal.onClose();
    }}
  return (
    <Modal
      title="Upload modal title"
      description="Upload modal description"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Upload Content
    </Modal>
  );
}

export default UploadModal;
