import { ReactNode } from "react";
import Sidebar from "./layout/Sidebar";
import FollowBar from "./layout/FollowBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-full bg-black">
      <div className="container mx-auto xl:px-4 grid grid-cols-4 h-ful">
        <Sidebar />
        <div className="h-full border-x-[1px] col-span-3 lg:col-span-2 border-neutral-800 text-white">
          {children}
        </div>
        <FollowBar />
      </div>
    </div>
  );
};

export default Layout;
