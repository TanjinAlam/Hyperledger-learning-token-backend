import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoggedOut } from "../../store/features/auth/authSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userLoggedOut());
    toast.success("Logged Out");
    navigate("/login");
  };
  return (
    <div className="fixed top-0 right-0 w-[calc(100%-15vw)] bg-white border-b shadow-md shadow-slate-100 px-5 py-[10px] flex z-[20] h-[7vh] items-center justify-between">
      <div></div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Topbar;
