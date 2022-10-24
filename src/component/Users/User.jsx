import React from "react";
import s from"./users.module.css";
import users from "../../user.png";
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgres, unfollow, follow}) => {

return(
    <div className={s.usersItem}>

    <span>
        <div className={s.userImg}>
            <NavLink to={"/profile/" + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : users} width={200}/>
            </NavLink>
        </div>
        <div className={s.userBtn}>
            {user.followed 
                ? <button disabled={followingInProgres.some(id => id === user.id)} onClick={() => {unfollow(user.id)}}>unfollow</button>
                : <button disabled={followingInProgres.some(id => id === user.id)} onClick={() => {follow(user.id)}}>follow</button>}
        </div>
        <span>
            <div>Name : {user.name}</div>
            <div> Id : {user.id}</div>
        </span>
    </span>
    </div>

   )
}

export default User