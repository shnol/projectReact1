import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgress,
    unfollowAC
} from "../../redux/usersReducer";
import Users from "./Users";
import loader from "../../assets/1128x128.gif"
import {getUsers} from "../../api/api";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
            getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUsersCount(response.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.setIsFetching(false)
            this.props.setUsers(data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={loader}/> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (isFetching, userId) => {
            dispatch(toggleFollowingProgress(isFetching, userId))
        }
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps) (UsersAPIContainer)

export default UsersContainer;