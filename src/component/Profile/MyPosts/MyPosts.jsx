import React from "react";
import Post from "./Post/Post";
import s from "./myposts.module.css";

const MyPosts = React.memo((props) => {
  //Variebals
  let postsElement = props.posts.map(post => <Post p={post} key={post.id}/>)
  let newPostElement = React.createRef()
  //Functions
  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
    return(
        <div>
          My Posts
          <div className={s.add}>
            <textarea ref={newPostElement} 
            value={props.newPostText}
            onChange={onPostChange}
            />
            <button onClick={onAddPost}>addPost</button>
          </div>
          {postsElement}
        </div>
    )
  }
)
export default MyPosts;