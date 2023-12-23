import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
 import Signup from "../Pages/Signup/Signup";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import ChatBox from "../Pages/ChatBox/ChatBox";
import Navbar from "../components/Navbar/Navbar";
import Leftbar from "../components/Leftbar/Leftbar";
import Rightbar from "../components/Rightbar/Rightbar";
import Message from "../Pages/Message/Message";
import FriendReq from "../Pages/FriendReq/FriendReq";


function Layout() {
  
  
  const Feed=()=>{
    return(
      <>
      <Navbar />
      <main>
        <Leftbar />
        <div className="container">
          <Outlet />
        </div>
        <Rightbar />
      </main>
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
    element:   <Feed />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/profile/:id",
        element:<Profile />
      },
      {
        path:"/chatbox/:id",
        element:<ChatBox />
      },
      {
        path:"/message/:id",
        element:<Message />
      },
      {
        path:"/friendreq/:id",
        element:<FriendReq />
      },
    ]
    },
    {
      path:"/login",
    element:<Login />
    },
    {
      path:"/signup",
    element:<Signup/>
    }

  ])
  return (
    <>
     <RouterProvider router={router} />   
    </>
  )
}

export default Layout