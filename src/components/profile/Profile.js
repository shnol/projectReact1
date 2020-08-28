import React from 'react';
import cls from './Profile.module.css';
import Profileinfo from "./profileinfo/Profileinfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";



let Profile = (props) => {
  return (
      <div className={cls.body}>
          <Profileinfo profile={props.profile}/>
          <MyPostsContainer/>
      </div>
  );
}

export default Profile;

