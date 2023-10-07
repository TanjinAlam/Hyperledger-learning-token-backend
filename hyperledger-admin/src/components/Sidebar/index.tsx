import MetisMenu from "@metismenu/react";
import "../../../node_modules/metismenujs/scss/metismenujs.scss";
import mainMenuItems from "../../config/menu";
import SidebarMenuItem from "./SidebarMenuItems";
const Sidebar = () => {
  return (
    <div className="bg-white h-screen fixed z-20 left-0 top-0 bottom-0 w-[15vw] border-r flex flex-col items-center">
      <div className="font-bold p-3 text-lg">HyperLedger</div>
      <MetisMenu>
        {mainMenuItems.map((item: any, index: number) => {
          return <SidebarMenuItem key={index} menuItem={item} />;
        })}
      </MetisMenu>
    </div>
  );
};

export default Sidebar;
