const fllw = "FOLLOW"
const unfllw = "UNFOLLOW"
const setUsers = "SET-USERS"
const setCurrentPage = "SET-CURRENT-PAGE"
const setTotalUsersCount = "SET-TOTAL-USERS-COUNT"

export const followAC = (userId) => ({type: fllw, userId})
export const unfollowAC = (userId) => ({type: unfllw, userId})
export const setUsersAC = (users) => ({type: setUsers, users})
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: setTotalUsersCount, totalUsersCount})

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
            return { ...state, users: action.users}
        }
        case setCurrentPage: {
            return { ...state, currentPage: action.currentPage}
        }
        case setTotalUsersCount: {
            return { ...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state
    }
}

export default usersReducer