import React from "react";
import Prealoader from "../../common/Prealoder/Prealoder";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Prealoader />
  }
    return(
        <>
          <div>
            <img src={props.profile.photos.large} />
            <ProfileStatus status={props.status}
            updateStatus={props.updateStatus}
            />
          </div>
        </>
    )
}

export default ProfileInfo