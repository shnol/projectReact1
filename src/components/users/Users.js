import React from 'react';

let Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
                </div>
            )
        }
    </div>
}


export default Users