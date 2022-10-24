import React from "react"
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/Users/UsersContainer";
import ProfileContainer from "./component/Profile/ProfileContainer";
import HeaderContainer from "./component/Header/HeaderContainer";
import Login from "./component/Login/Login";

function App(props) {
  console.log("render")
  return (
    <div className="App">
      <HeaderContainer />
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs"  element={<DialogsContainer />} />
          <Route path="/users/" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
