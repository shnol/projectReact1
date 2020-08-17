import React, {createRef} from 'react';
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";

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
    debugger
    let userslist = props.dialogPage.usersName.map(user => <User id={user.id} name={user.name}/>)
    let postslist = props.dialogPage.messageData.map(post => <Post id={post.id} post={post.text}/>)
    let addMessage = () => {
        props.dispatch(addMessageAC())
    }
    let onMessChng = (e) => {
        let text = e.target.value
        props.dispatch(updateMessageTextAC(text))
    }

    return (
        <div className={cls.body}>
            <div className={cls.dialogs}>
                {userslist}
            </div>
            <div className={cls.messages}>
                {postslist}
                <textarea
                    value={props.dialogPage.textMessage}
                    onChange={onMessChng}
                    placeholder={'here message'}></textarea>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}

export default dialogs;

