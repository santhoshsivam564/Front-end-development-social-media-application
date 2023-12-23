import Stories from "../../components/Stories/Stories";
import CurrentUserData from "../../Apis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./chatbox.css";

export default function ChatBox() {
  return (
    <>
    <Stories />
    <div className="chat-box">
         <div className="chat-box-top">
          <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
              <div className="user-name">
                <h3>{CurrentUserData.map(user=>(user.name))}</h3>
                <h5>{CurrentUserData.map(user=>(user.username))}</h5>
              </div>
          </div>
          <div className="chat-box-bottom">
            <form action="#">
              <input type="text" placeholder="Write Somthing..." />
              <button type="submit" className="btn btn-primary">
                <FontAwesomeIcon icon={faArrowAltCircleRight}/>
              </button>
              <label  className="btn btn-primary" htmlFor="cFile">
                <FontAwesomeIcon icon={faFileAlt}/>
                <input type="file" id="cFile" />
              </label>
            </form>
          </div>
    </div>
    </>
  )
}