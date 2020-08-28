import React from 'react';
import cls from './Profileinfo.module.css';
import Preloader from "../../common/preloader";


const profileinfo = (props) => {

    if(!props.profile) {
        return <Preloader/>
    }

  return (
      <div className={cls.body}>
          <img src={props.profile.photos.large} />
          <div className={cls.bodyinfo}>
              {props.profile.aboutMe}
              <div>{props.profile.fullName}</div>
          </div>
      </div>
  );
}

export default profileinfo;

