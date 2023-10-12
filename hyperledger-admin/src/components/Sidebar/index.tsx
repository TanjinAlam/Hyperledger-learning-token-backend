import MetisMenu from "@metismenu/react";
import "../../../node_modules/metismenujs/scss/metismenujs.scss";
import mainMenuItems from "../../config/menu";
import ProtectedSidebar from "./ProtectedSidebar";
import SidebarMenuItem from "./SidebarMenuItems";
const Sidebar = () => {
  return (
    <div className="bg-white h-screen fixed z-20 left-0 top-0 bottom-0 w-[15vw] border-r flex flex-col items-center">
      <div className="font-bold p-3 text-lg h-[7vh] flex items-center justify-center">
        Learning Token
      </div>
      <MetisMenu>
        {mainMenuItems.map((item: any, index: number) => {
          return (
            <ProtectedSidebar
              item={item}
              permissions={item.requiredPermissions}
              key={index}
            >
              <SidebarMenuItem key={index} menuItem={item} />;
            </ProtectedSidebar>
          );
        })}
      </MetisMenu>
    </div>
  );
};

export default Sidebar;
