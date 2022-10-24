import React from "react";
import { NavLink } from "react-router-dom";
import s from "./header.module.css";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.headerItem}>
                <NavLink to="/login">
                 <img src="https://msk-apple.ru/image/cache/catalog/image/catalog/11111.webp" width={50}/>
                </NavLink>
                <div className={s.loginB}>
                    {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;