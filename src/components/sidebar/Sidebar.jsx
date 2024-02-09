import Logo from "../../assets/Logo2.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo} alt="logo" className="sidebar-logo" />
        Stockings
      </div>
      <div className="sidebar-navigation">
        <button className="sidebar-menu active">
          <LuLayoutDashboard className="menu-icons " />
          Dashboard
        </button>
        <br />
        <button className="sidebar-menu">
          <IoNewspaperOutline className="menu-icons" />
          News
        </button>
        <br />
        <button className="sidebar-menu">
          <BiMessageDetail className="menu-icons" />
          Message
        </button>
        <br />
        <button className="sidebar-menu ">
          <GrSearch className="menu-icons" />
          Analysis
        </button>
        <br />
        <button className="sidebar-menu">
          <IoSettingsOutline className="menu-icons" />
          settings
        </button>
      </div>
    </div>
  );
}
