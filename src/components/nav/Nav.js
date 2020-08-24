import React from 'react';
import cls from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={cls.nav}>
            <div>
                <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={cls.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={cls.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={cls.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={cls.active}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={cls.active}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Nav;

