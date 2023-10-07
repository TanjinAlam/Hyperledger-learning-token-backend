import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";

const MasterLayout: FC = () => {
  return (
    <>
      <Topbar />
      <Sidebar />
      <div className="ml-[15vw] mt-[7vh] p-3">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MasterLayout;
