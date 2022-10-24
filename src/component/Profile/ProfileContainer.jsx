import React from "react";
import Profile from "./Profile";
import {getUserProfile, updateStatus, getStatus} from "../../redux/profileReducer"
import { connect } from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect"
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  
  componentDidMount(){
    let userId = this.props.router.params.userId;
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
    
}

  render() {
    return (
      <Profile {...this.props} 
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile : state.profilePage.profile,
    status : state.profilePage.status

  }
}

export default compose(
  connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)