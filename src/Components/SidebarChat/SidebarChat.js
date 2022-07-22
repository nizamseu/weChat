import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";
const SidebarChat = () => {
  return (
    <div className="sidebar__chat">
      <Avatar
        alt="Remy Sharp"
        src="https://yt3.ggpht.com/ytc/AKedOLQpchSiQpvNCS_zsPWJTOA77dXnE7idk-FIF4lKXw=s900-c-k-c0x00ffffff-no-rj"
      />
      <div className="sidebar__info">
        <h2>Chatt Room</h2>
        <p>POst the Last Message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
