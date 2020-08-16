let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'H1 i111 www123', like: '15'},
                {id: 2, text: 'I want do111 u do', like: '55'}
            ],
            textAreaOnProfile: 'hey im here!!'
        },
        dialogPage: {
            postsdata: [
                {id: 1, text: 'HI dude'},
                {id: 2, text: 'hihi'},
                {id: 3, text: 'kakwww dela'},
                {id: 4, text: 'vce cyper'},
                {id: 5, text: 'poka'}
            ],
            usersname: [
                {id: 1, name: 'Andrew'},
                {id: 2, name: 'Diwwma'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Nastya'},
                {id: 5, name: 'Vova'}
            ]
        }

    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._calsubscribe = observer
    },
    _calsubscribe() {
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 3,
                text: this._state.profilePage.textAreaOnProfile,
                like: 12
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textAreaOnProfile = ''
            this._calsubscribe(this.state)
        } else if (action.type === "UPDATE-POST-TEXT") {
            this._state.profilePage.textAreaOnProfile = action.newText
            this._calsubscribe(this.state)
        }
    }

}

export default store;
window.store = store