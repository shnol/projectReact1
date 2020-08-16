import React, {createRef} from 'react';
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={cls.user}>
            <NavLink to={"/dialogs/" + props.id}> {props.name}</NavLink>
        </div>
    )
}

const Post = (props) => {
    return (
        <div className={cls.post} id={props.id}>{props.post}</div>
    )
}

const dialogs = (props) => {

    let userslist = props.usersname.map(user => <User id={user.id} name={user.name}/>)
    let postslist = props.postsdata.map(post => <Post id={post.id} post={post.text}/>)
    const addPost = createRef()
    const addPosts = () =>  {alert(addPost.current.value)}

    return (
        <div className={cls.body}>
            <div className={cls.dialogs}>
                {userslist}
            </div>
            <div className={cls.messages}>
                {postslist}
                <textarea ref={addPost}></textarea>
                <button onClick={addPosts}>Add post</button>
            </div>
        </div>
    );
}

export default dialogs;

