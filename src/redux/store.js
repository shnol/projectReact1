// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, text: 'H1 i111 www123', like: '15'},
//                 {id: 2, text: 'I want do111 u do', like: '55'}
//             ],
//             textAreaOnProfile: 'hey im here!!'
//         },
//         dialogPage: {
//             messageData: [
//                 {id: 1, text: 'HI dude'},
//                 {id: 2, text: 'hihi'},
//                 {id: 3, text: 'kakwww dela'},
//                 {id: 4, text: 'vce cyper'},
//                 {id: 5, text: 'poka'}
//             ],
//             usersName: [
//                 {id: 1, name: 'Andrew'},
//                 {id: 2, name: 'Diwwma'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Nastya'},
//                 {id: 5, name: 'Vova'}
//             ],
//             textMessage: "hi!!! write here!!!!"
//         }
//
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._calsubscribe = observer
//     },
//     _calsubscribe() {
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
//
//         this._calsubscribe(this._state)
//     }
//
// }
//
//
// export default store;
// window.store = store