const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
let initialState ={
    dialogs : [
        {id : 1, name : "Narek"},
        {id : 2, name : "Ani"},
        {id : 3, name : "Vardan"},
      ],
    messages : [
        {id : 1, message : "hi my name is Narek"},
        {id : 2, message : "yo kak kruto React and redux"},
        {id : 3, message : "ari gnanq lav qef annnenq"},
      ],
    newMessageBody : "Armenia"
}

const dialogsReducer = (state = initialState, action) => {
    
  switch(action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
        return {
          ...state,
          newMessageBody : action.body
        }
      case SEND_MESSAGE:
        let body = state.newMessageBody
        return{
          ...state,
          messages : [...state.messages, {id : 6, message : body}],
          newMessageBody : ""
        }
      default:
        return state
    }
}

export const sendMessageCreator = () => ({type : SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type : UPDATE_NEW_MESSAGE_BODY, body});
export default dialogsReducer;