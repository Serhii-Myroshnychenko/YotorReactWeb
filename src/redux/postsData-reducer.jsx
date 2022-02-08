const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [{
        id: 1, texthead: 'Топ стрижек 2021', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
    }, {
        id: 2, texthead: 'Выбор кресла для барберов', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
    }, {
        id: 3, texthead: 'Как выбрать “своего” мастера', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
    }],

};

const postsDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                texthead: state.newPostText,
                textmain: "lorem lalallal"
            };
            state.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default: return state;
    }

}

export default postsDataReducer;