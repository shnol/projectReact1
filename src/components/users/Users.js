import React from "react";
import cls from "./Users.module.css";
import img from "../../assets/111.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


const Users = (props) => {
    let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p && cls.selectedPage}
                                 onClick={() => {props.onPageChanged(p)}}>{p}</span>
                }
            )}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : img}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: { "API-KEY": "b35ccfae-a737-4502-a353-a1e6b5bfd623"}
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                                 }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: { "API-KEY": "b35ccfae-a737-4502-a353-a1e6b5bfd623"}
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    if (response.data.resultCode === 1) {
                                        console.log("errror")
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })
                                 }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.location.cit"}</div>
                    <div>{"u.location.country"}</div>
                </span>
                </div>
            )
        }
    </div>
}

export default Users