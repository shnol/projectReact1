import React from 'react';
import cls from './Profileinfo.module.css';


const profileinfo = () => {
  return (
      <div className={cls.body}>
          <img src="https://codeseller.ru/wp-content/uploads/2019/11/srt-translate-list.jpg" alt="список" />
          <div className={cls.bodyinfo}>
              ava+description
          </div>
      </div>
  );
}

export default profileinfo;

