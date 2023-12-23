import FriendReq from "../../Pages/FriendReq/FriendReq";
import Message from "../../Pages/Message/Message";

import "./rightbar.css";



export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-container">
        <Message />
        <FriendReq />
      </div>
    </div>
  )
}