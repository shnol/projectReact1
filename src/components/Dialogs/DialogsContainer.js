import React from 'react';
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let addMessage = () => {
//         props.dispatch(addMessageAC())
//     }
//     let onMessChng = (text) => {
//         props.dispatch(updateMessageTextAC(text))
//     }
//
//     return (<Dialogs
//         onMessChng={onMessChng}
//         addMessage={addMessage}
//         dialogPage={props.dialogPage}/>);
// }

let f1 = (state) => {
     return {
         dialogPage: state.dialogPage
     }
}
let f2 = (dispatch) => {
    return {
        onMessChng: (text) => {
            dispatch(updateMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
const DialogsContainer = connect (f1, f2) (Dialogs)

export default DialogsContainer;

