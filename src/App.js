import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="body">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
            <Nav/>
            <Footer/>
        </div>
    );
}

export default App;

