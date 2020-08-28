import React from "react";
import cls from "./Users.module.css";
import img from "../../assets/111.jpg";
import {NavLink} from "react-router-dom";


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
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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