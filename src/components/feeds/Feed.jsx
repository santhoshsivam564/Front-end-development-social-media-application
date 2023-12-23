import "./feeds.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CurrentUserData from "../../Apis/CurrentUserData";
import anotherIcon from "../../assets/img/heartblue1.svg";
import LikeIcon from "../../assets/img/heartlike.svg";
import CmtIcon from "../../assets/img/chat.svg";
import shareicon from "../../assets/img/share2.svg";

export default function Feed({fed}) {
  const [Like, setLike]=useState(LikeIcon);
  const[Count, setCount]=useState(23);
  const[Comments, SetComments] = useState([]);
  const [CommentWriting, setCommentWriting] = useState('');
  const[show,setShow]=useState(false);

  const handleLike=()=>{
    if(Like===LikeIcon){
        setLike(anotherIcon);
        setCount(Count+1);
    }else{
        setLike(LikeIcon)
        setCount(Count-1)
    }
  }

  const addComment=()=>{
    const comment={
        "id": "me",
        "name" : "DuraiSamy",
        "username": "@theduraiweb",
        'title':`${CommentWriting}`
    } 
    SetComments(Comments.concat(comment));
  }
  const handleComment=()=>{
    addComment()
  }
  console.log(Comments);

  const handleShow=()=>{
    if(show===false){
        setShow(true)
    }else{
        setShow(false)
    }
  }

  return (
    <div className="feed">
        <div className="top-content">
            <Link to="/profile/id">
                <div className="user">
                    <img src={fed.feedProfile} alt="" />
                    <div>
                        <h5>{fed.name}</h5>
                        <small>{fed.time}</small>
                    </div>
                </div>
            </Link>
            <span><FontAwesomeIcon  icon={faListDots}/></span>
        </div>
        <div className="mid-content">
            <p>{fed.desc}</p>
            <img src={fed.feedImage} alt="" />
        </div>
        <div className="bottom-content">
            <div className="action-item">
                <img src={`${Like}`} onClick={handleLike} className="iconPost" alt="" />
                <p>{Count} Likes</p>
            </div>
            <div className="action-item">
                <img src={`${CmtIcon}`} onClick={handleShow} className="iconPost" alt="" />
                <p>Comments</p>
            </div>
            <div className="action-item">
                <img src={`${shareicon}`}  className="iconPost" alt="" />
                <p>3 Share</p>
            </div>
        </div>
        {show === true?
        <div>
        <div className="commentPost">
        <div className="user comment-post">
                    <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                    <input type="text" className="cmtPost" placeholder="Write Your Thoughts..." 
                    onChange={(e)=>setCommentWriting(e.target.value)}
                    />
                    <button className="addCmt" onClick={handleComment}>Send</button>

                    
        </div>
        </div>
        {Comments.map((item)=>(
            <div className="user cmt-cmtPost">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
                    <h5>{item.name}</h5>
                    <p>{item.title}</p>
            
            </div>
        ))}
        </div>:''
        }
        
    </div>
  )
}