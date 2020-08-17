import React from 'react';
import cls from './MyPosts.module.css';
import Post from "./post/Post";
import {addPostAC, updatePostTextAC} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let postslist = props.profilePage.posts.map(post => <Post
        message={post.text}
        like={post.like}
        id={post.id}/>)
    let newPostEl = React.createRef()
    let addpost = () => {
        props.dispatch(addPostAC())
    }
    let onPostChng = () => {
        let text = newPostEl.current.value
        props.dispatch(updatePostTextAC(text))
    }

    return (
        <div>
            <div className={cls.header}>
                Posts
            </div>
            <div className={cls.item}>
                <textarea
                    ref={newPostEl}
                    value={props.profilePage.textAreaOnProfile}
                    onChange={onPostChng}/>
                <button onClick={addpost}>Add post</button>
                {postslist}
            </div>
        </div>
    );
}

export default MyPosts;

