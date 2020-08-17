const am = "ADD-MESSAGE"
const umt = "UPDATE-MESSAGE-TEXT"

export let addMessageAC = () => ({type: am})
export let updateMessageTextAC = (text) => ({type: umt, newMessage: text})

let initialState = {
    messageData: [
        {id: 1, text: 'HI dude'},
        {id: 2, text: 'hihi111'},
        {id: 3, text: 'kakwww dela'},
        {id: 4, text: 'vce cyper'},
        {id: 5, text: 'poka'}
    ],
    usersName: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Diwwma'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Vova'}
    ],
    textMessage: "hi!!! write 111here!!!!"
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case umt:
            state.textMessage = action.newMessage
            return state
        case am:
            let newMessage = state.textMessage
            state.messageData.push({id: 6, text: newMessage})
            state.textMessage = ""
            return state
        default:
            return state
    }
}
export default dialogsReducer