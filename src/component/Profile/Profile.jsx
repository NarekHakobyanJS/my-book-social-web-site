import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatusHooks from "./ProfileInfo/ProfileStatusHooks";

const Profile = (props) => {
    return (
      <div>
        <ProfileStatusHooks profile={props.profile}
         status={props.status} 
         updateStatus={props.updateStatus}/>
        <MyPostsContainer />
      </div>
    )
}

export default Profile;