import React from "react";
import s from "../dialogs.module.css";

const Messages = ({m}) => {
    return(
        <div className={s.message}>{m.message}</div>
    )
}

export default Messages;