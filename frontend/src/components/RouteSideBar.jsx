import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const RouteSideBar = () => {
  return (
    <div className="flex bg-slate-200/70 relative z-50">
    <SideBar />
    <Outlet />
  </div>
  )
}

export default RouteSideBar