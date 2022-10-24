import React from "react";
import { connect } from "react-redux";
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgres } from "../../redux/usersSelector";
import {follow, unfollow, setCurrentPage, toggleFollowingProgres, requestUsers} from "../../redux/usersReducer";
import Users from "./Users";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import Prealoader from "../common/Prealoder/Prealoder";
import { compose } from "redux";

class UsersClassContainer extends React.Component{
    constructor(props){
        super(props)
    }

   componentDidMount(){
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
        
   }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
}

     render(){
        return(
            <>
            {this.props.isFetching ? <Prealoader /> : null}
            <Users 
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgres={this.props.followingInProgres}
            />
            </>
        )
    }
}


// let mapStateToProps = (state) => {
//     return{
//         users : state.usersPage.users,
//         pageSize : state.usersPage.pageSize,
//         totalUsersCount : state.usersPage.totalUsersCount,
//         currentPage : state.usersPage.currentPage,
//         isFetching : state.usersPage.isFetching,
//         followingInProgres : state.usersPage.followingInProgres
//     }
// }


let mapStateToProps = (state) => {
    return{
        users : getUsers(state),
        pageSize : getPageSize(state),
        totalUsersCount : getTotalUsersCount(state),
        currentPage : getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingInProgres : getFollowingInProgres(state)
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgres, requestUsers})
)(UsersClassContainer)