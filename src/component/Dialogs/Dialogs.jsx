import React from "react";
import s from "./dialogs.module.css";
import Messages from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
let state = props.dialogsPage
let dialogsElement = state.dialogs.map(dialog => <DialogItem d={dialog} key={dialog.id}/>)
let messagesElement = state.messages.map(message => <Messages m={message} key={message.id}/>)
let newMessageBody = state.newMessageBody

let onSendMessageClick = () => {
    props.sendMessage()
}

let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
}


    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>
                {messagesElement}
                </div>
                <div>
                    <textarea value={newMessageBody}
                    onChange={onNewMessageChange}
                    />
                    <button onClick={onSendMessageClick}>sendMessage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;