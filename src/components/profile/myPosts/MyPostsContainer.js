import React from 'react';
import {addPostAC, updatePostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//     let addpost = () => {
//         props.dispatch(addPostAC())
//     }
//     let onPostChng = (text) => {
//         props.dispatch(updatePostTextAC(text))
//     }
//
//     return (<MyPosts onPostChng={onPostChng} addpost={addpost} profilePage={props.profilePage}/>);
// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onPostChng: (text) => {
            dispatch(updatePostTextAC(text))
        },
        addpost: () => {
            dispatch(addPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;

