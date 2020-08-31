const fllw = "FOLLOW"
const unfllw = "UNFOLLOW"
const setUsers = "SET-USERS"
const setCurrentPage = "SET-CURRENT-PAGE"
const setTotalUsersCount = "SET-TOTAL-USERS-COUNT"
const toggleIsFetching = "TOGGLE-IS-FETCHING"
const TOGGLE_IN_FOLLOWING_PROGRESS = "TOGGLE_IN_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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
        case toggleIsFetching: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IN_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : []
            }
        }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: fllw, userId})
export const unfollowAC = (userId) => ({type: unfllw, userId})
export const setUsersAC = (users) => ({type: setUsers, users})
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: setTotalUsersCount, totalUsersCount})
export const setIsFetchingAC = (isFetching) => ({type: toggleIsFetching, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IN_FOLLOWING_PROGRESS, isFetching, userId})

export default usersReducer