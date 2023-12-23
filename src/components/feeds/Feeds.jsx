import Feed from "./Feed";
import "./feeds.css";

import HomeFeedData from "../../Apis/HomeFeedData"; 
export default function Feeds() {
  return (
    <div className="feeds">
    {
        HomeFeedData.map(fed=>(
            <Feed fed={fed} key={fed.key} />
        ))
    }
    </div>
  )
}