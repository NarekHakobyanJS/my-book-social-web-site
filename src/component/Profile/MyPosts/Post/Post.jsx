import React from "react";
import s from "./post.module.css";

const Post = ({p}) => {
    return(
        <>
        <div className={s.post}>
            <img src="https://avatars.mds.yandex.net/i?id=b25ba42d3d050c5dbe343fce8b8ec3bf-5234615-images-thumbs&n=13" width={150}/>
            <span>{p.message}</span>
            <span>likesCount : {p.likesCount}</span>
        </div>
        </>
    )
}

export default Post;