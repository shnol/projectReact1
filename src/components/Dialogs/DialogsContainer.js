import React from 'react';
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageAC())
    }
    let onMessChng = (text) => {
        props.dispatch(updateMessageTextAC(text))
    }

    return (<Dialogs
        onMessChng={onMessChng}
        addMessage={addMessage}
        dialogPage={props.dialogPage}/>);
}

export default DialogsContainer;

