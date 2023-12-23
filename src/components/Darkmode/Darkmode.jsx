import "./darkmode.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Darkmode() {

  const Darkhandle=()=>{
    document.querySelector('body').classList.toggle('darkmood');
  }

  return (
    <div className="dark-mood-icon">
      <FontAwesomeIcon  icon={faLightbulb} onClick={Darkhandle} />
    </div>
  )
}