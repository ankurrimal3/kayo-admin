import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users,setUsers]=useState([])

  useEffect(()=>{
    const getUsers=async()=>{
      try{
      const res=await userRequest.get("/user/?new=true")
      setUsers(res.data)
      }
      catch(err) {

      }
    }
    getUsers()
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
      {users.map(user=>(

      
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://image.shutterstock.com/image-vector/young-smiling-man-adam-avatar-600w-2107967969.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
           
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
        
      </ul>
    </div>
  );
}
