import React from 'react';
import cls from './Profile.module.css';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";






class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.usrId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)

        })
    }

    render() {
        return (
            <div className={cls.body}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataProfileContainer = withRouter (ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataProfileContainer) ;

