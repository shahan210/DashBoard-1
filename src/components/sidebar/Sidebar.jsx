import Logo from "../../assets/Logo2.png";
import { MdDashboard } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo} alt="logo" className="sidebar-logo" />
        Stewardship
      </div>
      <div className="sidebar-navigation">
        <button className="sidebar-menu active">
          <MdDashboard className="menu-icons " />
          Dashboard
        </button>
        <br />
        <button className="sidebar-menu">
          <IoNewspaperSharp className="menu-icons" />
          News
        </button>
        <br />
        <button className="sidebar-menu">
          <BiSolidMessageSquareDetail className="menu-icons" />
          Message
        </button>
        <br />
        <button className="sidebar-menu ">
          <MdBarChart className="menu-icons" />
          Analytics
        </button>
        <br />
        <button className="sidebar-menu">
          <IoSettingsOutline className="menu-icons" />
          Settings
        </button>
      </div>
    </div>
  );
}
