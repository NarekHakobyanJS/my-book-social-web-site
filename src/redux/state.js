import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _state : {
    profilePage : {
        posts : [
            {id : 1, message : "hello React from Narek", likesCount : "55"},
            {id : 2, message : "props is js objcet", likesCount : "47"},
            {id : 3, message : "it s my first post", likesCount : "78"},
            {id : 4, message : "leran js leran react Redux", likesCount : "889"},
          ],
        newPostText : "Narek Hakobyan"
    },
    dialogsPage : {
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
},
getState(){
  return this._state
},
_callSubsriber () {
  
},
dispatch(action){
  
  this._state.profilePage =  profileReducer(this._state.profilePage, action)
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
  this._callSubsriber()
},

subscribe (observer){
  this._callSubsriber = observer
}
}


window.store = store
export default store;