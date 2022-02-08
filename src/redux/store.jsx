import newPostTextReducer from "./newPostText-reducer";
import postsDataReducer from "./postsData-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    postsData: [{
      id: 1, texthead: 'Топ стрижек 2021', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
    }, {
      id: 2, texthead: 'Выбор кресла для барберов', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
    }, {
      id: 3, texthead: 'Как выбрать “своего” мастера', textmain: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....'
    }],

    newPostText: 'it-kamasutra'
  },
  _callSubscriber() {
    console.log('state was changed');
  },


  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer - наблюдатель - паттерн
  },


  addpost() {
    let newPost = {
      id: 4,
      texthead: this._state.newPostText,
      textmain: "lorem lalallal"
    };
    this._state.postsData.push(newPost);
    this._state.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) { //  { type: 'название действия  например ADD-POST' }

    this._state.postsData = postsDataReducer(this._state.postsData, action);
    this._state.newPostText = newPostTextReducer(this._state.newPostText, action);

      this._callSubscriber(this._state);
    }

  }

 

export const addPostActionCreator = () => {

  return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default store;
window.store = store;



