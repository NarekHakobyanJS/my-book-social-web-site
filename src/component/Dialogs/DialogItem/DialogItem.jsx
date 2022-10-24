import React from "react";
import { NavLink } from "react-router-dom";
import s from "../dialogs.module.css";

const DialogItem = ({d}) => {
    let path = "/dialogs/" + d.id
    return(
        <div className={s.dialog}>
            <NavLink to={path}>{d.name}</NavLink>
        </div>
    )
}


export default DialogItem;