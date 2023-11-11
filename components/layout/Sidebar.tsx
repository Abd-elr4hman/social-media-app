import SidebarItem from "./SidebarItem";
import SidebarLogo from "./SidebarLogo";
import SidebarPost from "./SidebarPost";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      auth: true,
    },
  ];
  return (
    <div className="flex-col">
      <div className="px-6">
        <SidebarLogo />
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
            auth={item.auth}
            alert={item.alert}
          />
        ))}
        {currentUser && (
          <SidebarItem
            onClick={() => signOut()}
            icon={BiLogOut}
            label="Logout"
            href={"/logout"}
          />
        )}

        <SidebarPost />
      </div>
    </div>
  );
};

export default Sidebar;
