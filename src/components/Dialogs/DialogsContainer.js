import React from 'react';
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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

