
const ap = "ADD-POST"
const upt = "UPDATE-POST-TEXT"

export let addPostAC = () => ({type: ap})
export let updatePostTextAC = (text) => ({type: upt, newText: text})

let initialState = {
    posts: [
        {id: 1, text: 'H1 i111 www123', like: '15'},
        {id: 2, text: 'I want do111 u do', like: '55'}
    ],
    textAreaOnProfile: 'hey im here!!'
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
        default:
            return state
    }
}

export default profileReducer