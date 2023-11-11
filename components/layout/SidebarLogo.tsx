import { BiAtom } from "react-icons/bi";
import { TbLambda } from "react-icons/tb";
const SidebarLogo = () => {
  return (
    <div className="flex flex-row items-center justify-end lg:justify-start">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <TbLambda size={40} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <TbLambda
          className="hover:bg-slate-300 rounded-xl"
          size={40}
          color="white"
        />
      </div>
    </div>
  );
};

export default SidebarLogo;
