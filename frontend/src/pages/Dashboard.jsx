import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import SideBar from "../components/SideBar";

const Dashboard = () => {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div className="flex bg-slate-200/70 relative z-50">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
