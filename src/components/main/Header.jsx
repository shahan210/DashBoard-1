import { Notification } from "iconsax-react";
import React from "react";
import Dp from "../../assets/Dp.jpg";

export default function Header() {
  return (
    <div>
      <div className="dash-header">
        <div className="notification">
          <Notification size="22" color="#555555" variant="TwoTone" />
        </div>
        <div className="profile">
          <div className="profile-details">
            Welcome!
            <div className="name">Mr.John Doe</div>
          </div>
          <img src={Dp} alt="profile picture" className="profile-image" />
        </div>
      </div>
    </div>
  );
}
