import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let addpost = () => {
        props.dispatch(addPostAC())
    }
    let onPostChng = (text) => {
        props.dispatch(updatePostTextAC(text))
    }

    return (<MyPosts onPostChng={onPostChng} addpost={addpost} profilePage={props.profilePage}/>);
}

export default MyPostsContainer;

