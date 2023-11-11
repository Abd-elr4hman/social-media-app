import useUser from "../hooks/useUser";
import { useCallback } from "react";
import { Image } from "next/dist/client/image-component";

import { useRouter } from "next/dist/client/router";
interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
  placeHolderImage?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  userId,
  isLarge,
  hasBorder,
  placeHolderImage,
}) => {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();
  const onClick = useCallback(
    (event: any) => {
      // avatar is going to be used inside some components which is going to be clickable,
      //i want to make sure that whever the avatar is clicked the onClick of the parent element is overridden.
      event.stopPropagation();

      const url = `/users/${userId}`;

      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`
        ${hasBorder ? "border-4 border-black" : ""}
        ${isLarge ? "h-32" : "h-12"}
        ${isLarge ? "w-32" : "w-12"}
        rounded-full
        transition
        cursor-pointer
        relative
      `}
    >
      <Image
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || placeHolderImage}
      />
    </div>
  );
};

export default Avatar;
