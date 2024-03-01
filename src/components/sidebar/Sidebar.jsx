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
        <p>Stewardship</p>
      </div>
      <div className="sidebar-navigation">
        <button className="sidebar-menu active">
          <MdDashboard className="menu-icons " />
          <p>Dashboard</p>
        </button>
        <br />
        <button className="sidebar-menu">
          <IoNewspaperSharp className="menu-icons" />
          <p>News</p>
        </button>
        <br />
        <button className="sidebar-menu">
          <BiSolidMessageSquareDetail className="menu-icons" />
          <p>Message</p>
        </button>
        <br />
        <button className="sidebar-menu ">
          <MdBarChart className="menu-icons" />
          <p>Analytics</p>
        </button>
        <br />
        <button className="sidebar-menu">
          <IoSettingsOutline className="menu-icons" />
          <p>Settings</p>
        </button>
      </div>
    </div>
  );
}
