import React from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";

const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <div className={s.navlink}>
                <NavLink to="/profile/userId">Profile</NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={s.navlink}>
                <NavLink to="/users">Users</NavLink>
            </div>
            <div className={s.navlink}>
            <a href="">News</a>
            </div>
            <div className={s.navlink}>
            <a href="">Music</a>
            </div>
      </nav>
    )
}

export default Navbar;