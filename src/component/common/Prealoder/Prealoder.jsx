import React from "react";
import loading from "../../loader.gif";
import s from "./preloader.module.css";

const Prealoader = () => {
    return (
        <img src={loading} className={s.loading}/>
    )
}

export default Prealoader