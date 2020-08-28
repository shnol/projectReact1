import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import WithUrlDataProfileContainer from "./components/profile/ProfileContainer";

const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <div className="body">
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/profile/:usrId" render={() => <WithUrlDataProfileContainer/>}/>
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

