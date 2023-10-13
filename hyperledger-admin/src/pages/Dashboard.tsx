import { useSelector } from "react-redux";
import { RootState } from "../store";

function Dashboard() {
  const auth = useSelector((state:RootState)=> state.auth)
  return (
    <>
      <div className="font-bold text-lg">Hello <span className="capitalize">{auth.user.name}</span></div>
    </>
  );
}

export default Dashboard;
