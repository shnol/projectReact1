import React from 'react';
import cls from './Profile.module.css';
import Profileinfo from "./profileinfo/Profileinfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";



const profile = (props) => {
  return (
      <div className={cls.body}>
          <Profileinfo />
          <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>
      </div>
  );
}

export default profile;

