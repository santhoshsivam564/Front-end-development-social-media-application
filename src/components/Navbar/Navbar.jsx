import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faBell, faEnvelope, faHome, faRightFromBracket, faSearch, faUser, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import './navbar.css';
import CurrentUser from "../../Apis/CurrentUserData";
import Darkmode from "../Darkmode/Darkmode";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
        <Link to="/">
          <h3 className="logo"> SocialFi</h3>
        </Link>
        <Link to='/'>
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link to='/profile/id'>
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to='/friendreq/id'>
          <FontAwesomeIcon icon={faUserGroup} />
        </Link>
        
        <div className="Nav-searchbar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search your friends..." />
        </div>
        </div>


        <div className="nav-right">
        <Link to='/chatbox/id'>
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to='/message/id'>
          <FontAwesomeIcon icon={faBell} />
        </Link>
        <Darkmode />
        <Link to='/signup'>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
        <Link to='/'>

          <FontAwesomeIcon icon={faBars}  />
        </Link>
       
        <div className="user">
          <Link to="/profile/id">
          <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
          </Link>
          
          </div>
        <h4>DuraiSamy</h4>
        </div>
      </div>
    </nav>
  )
}