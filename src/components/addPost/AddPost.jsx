import "./addpost.css";

import CurrentUserData from "../../Apis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSmile, faTags, faVideo } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState} from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";


export default function AddPost() {
//    const userDetails = useSelector();
//    let user = userDetails.user;
//    const accesstoken= user.accessToken
//  const [post, setPost]=useState([]);
// useEffect(() => {
//    const getPost = async()=>{
//     try {
//       const res = await axios.get(`http://localhost:4000/post/create/post` , {
//         headers:{
//           token:accesstoken
//         }
//       })
//       setPost(res.data);
//     } catch (error) {
//       console.log("Some error accured");
//     }
//    }
//    getPost();
//   }, )

//   console.log(post);
  

 

  return (
    <form className="postForm">
        <div className="user form-top">
           <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt="" />
           <input type="text" placeholder="What's on your mind?" className="user-top"  />
           <button type="submit" className="btn btn-primary">Post</button>
        </div>
        <div className="post-categories">
            <label htmlFor="file">
               <input type="file" id="file" />
               <span><FontAwesomeIcon  icon={faImage} /> Photos</span>
            </label>
            <label htmlFor="file">
               <input type="file" id="file" />
               <span><FontAwesomeIcon  icon={faVideo} /> Videos</span>
            </label>
            <span><FontAwesomeIcon  icon={faTags}/> Tag</span>
            <span><FontAwesomeIcon  icon={faSmile}/> Feelings</span>
        </div>
    </form>
  )
}