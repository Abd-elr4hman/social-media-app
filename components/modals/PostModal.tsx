import Form from "../Form";
import Modal from "../Modal";
import usePostModal from "@/hooks/usePostModal";
import { useState } from "react";
import { useCallback } from "react";

const PostModal = () => {
  const postModal = usePostModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      postModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [postModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Form placeholder="What's happening?" />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={postModal.isOpen}
      actionLabel="Post"
      onClose={postModal.onClose}
      body={bodyContent}
    />
    //   ;
  );
};

export default PostModal;
