import React from "react";
import s from"./users.module.css";
import User from "./User";
import Paginator from "./Paginator";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, followingInProgres, follow, unfollow, ...props}) => {


return(
       <div className={s.users}>
        <Paginator currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
        />          

    <div className={s.usersItem}>
       {
           props.users.map(u => <User key={u.id} user={u} followingInProgres={followingInProgres} unfollow={unfollow} follow={follow}/>)
            
       }
       </div>
   </div>
   )
}

export default Users