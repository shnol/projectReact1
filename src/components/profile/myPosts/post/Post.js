import React from 'react';
import cls from './Post.module.css';

const post = (props) => {
    return (
        <div>
            <div className={cls.item}>
                <img src='https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1'/>
                {props.message}
                <span className={cls.like}>
                    <img src='https://img.favpng.com/20/19/15/heart-computer-icons-like-button-clip-art-instagram-png-favpng-0qFicvyLEnUGRhqGJp9yK8xi5.jpg'/>
                    {props.like}
                </span>
            </div>
        </div>
    );
}

export default post;

