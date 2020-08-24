const fllw = "FOLLOW"
const unfllw = "UNFOLLOW"
const setUsers = "UNFOLLOW"

export const followAC = (userId) => ({type: fllw, userId})
export const unfollowAC = (userId) => ({type: unfllw, userId})
export const setUsersAC = (users) => ({type: setUsers, users})

let initialState = {
    users: [
        {id: 1, followed: true, name: 'H1 i111 www123', status: "BOSS", location: {city: "KRD", country: "russia"}},
        {id: 2, followed: false, name: 'H2', status: "BOSS", location: {city: "qwe", country: "fdgfg"}},
        {id: 3, followed: true, name: 'H3', status: "BOSS", location: {city: "asd", country: "zxc"}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case fllw:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true}
                    }
                    return u
                })
            }
        case unfllw:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false}
                    }
                    return u
                })
            }
        case setUsers: {
            return { ...state, users: [ ...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export default usersReducer