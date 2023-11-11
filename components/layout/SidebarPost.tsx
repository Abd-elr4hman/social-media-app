import { useRouter } from "next/router";
import { MdOutlinePostAdd } from "react-icons/md";
import useLoginModal from "@/hooks/useLoginModal";
import { useCallback } from "react";
import usePostModal from "@/hooks/usePostModal";

const SidebarPost = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const postModal = usePostModal();

  // const onClick = useCallback(() => {
  //   loginModal.onOpen();
  // }, [loginModal]);

  const onClick = useCallback(() => {
    postModal.onOpen();
    console.log(postModal.isOpen);
  }, [postModal]);

  return (
    <div onClick={onClick}>
      <div className="flex justify-end">
        <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
          <MdOutlinePostAdd size={28} />
        </div>
      </div>

      <div className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition">
        <p className="text-center font-semibold text-white text-[20px]">Post</p>
      </div>
    </div>
  );
};

export default SidebarPost;
