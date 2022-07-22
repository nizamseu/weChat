import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./SideBar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import SidebarChat from "../SidebarChat/SidebarChat";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar
          alt="Remy Sharp"
          src="https://yt3.ggpht.com/ytc/AKedOLQpchSiQpvNCS_zsPWJTOA77dXnE7idk-FIF4lKXw=s900-c-k-c0x00ffffff-no-rj"
        />
        <div className="header_right">
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="searchBar">
        <div className="searchBar_container">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder="Enter Your Text" type="text" />
        </div>
      </div>
      <div className="sideBar_chat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default SideBar;
