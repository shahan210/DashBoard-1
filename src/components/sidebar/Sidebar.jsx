import Logo from "../../assets/Logo2.png";
import { LuLayoutDashboard } from "react-icons/lu";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={Logo} alt="logo" className="sidebar-logo" />
        Stockings
      </div>
      <div className="sidebar-navigation">
        <div className="sidebar-menu">
          <LuLayoutDashboard className="menu-icons" />
          Dashboard
        </div>
        <div className="sidebar-menu">News</div>
        <div className="sidebar-menu">Message</div>
        <div className="sidebar-menu">Analysis</div>
        <div className="sidebar-menu">settings</div>
      </div>
    </div>
  );
}
