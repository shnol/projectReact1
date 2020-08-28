const ap = "ADD-POST"
const upt = "UPDATE-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export let addPostAC = () => ({type: ap})
export let updatePostTextAC = (text) => ({type: upt, newText: text})
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})

let initialState = {
    posts: [
        {id: 1, text: 'H1 i111 www123', like: '15'},
        {id: 2, text: 'I want do111 u do', like: '55'}
    ],
    textAreaOnProfile: 'hey im here!!',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case upt:
            return {
                ...state,
                textAreaOnProfile: action.newText
            }
        case ap:
            let newPost = state.textAreaOnProfile
            return {
                ...state,
                posts: [ ...state.posts, {id: 3, text: newPost, like: 14}],
                textAreaOnProfile: ""
            }
        case SET_USER_PROFILE:
            return  { ...state, profile: action.profile}
        default:
            return state
    }
}

export default profileReducer