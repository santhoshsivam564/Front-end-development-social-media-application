import AddPost from "../../components/AddPost/Stories";
import Feeds from "../../components/feeds/Feeds";
import UserProfile from "../../components/userprofile/UserProfile";


export default function Profile() {
  return (
    <>
    <UserProfile />
    <AddPost />
    <Feeds />
    </>
  )
}