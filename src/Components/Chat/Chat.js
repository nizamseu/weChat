import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Chat.css";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__info">
          <h3>Chat Room</h3>
          <p>Last seen</p>
        </div>
        <div className="chatHeader__Right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__messages">
          <span className="chat__name">Nizam Uddin</span>
          this is message
          <span className="time__stamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__messages receiver">
          <span className="chat__name">Nizam Uddin</span>
          this is message
          <span className="time__stamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__messages receiver">
          <span className="chat__name">Nizam Uddin</span>
          this is message
          <span className="time__stamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__messages">
          <span className="chat__name">Nizam Uddin</span>
          this is message
          <span className="time__stamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input type="text" placeholder="Send Messages" />
          <button type="submit">Send</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
