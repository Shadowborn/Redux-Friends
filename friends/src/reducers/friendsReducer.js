import {/* we need our action types here*/ 
LOGIN_SUCCESS,
LOGIN_ABSOLUTE_FAILURE,
LOGIN_START,
JUST_FETCH,
SUCCESS_FETCH,
FAILURE_FETCH
}from "../actions/index";

const initialState = {
    friends: [],
    fetching: false,
    error: '',
    isLoggingIn: false
    // Array characters, Boolean fetching, null error.
};

export const reduceFriends = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START: return {
            ...state,
            isLoggingIn: true,
            error: ''
        }
        case LOGIN_SUCCESS: return {
            ...state,
            isLoggingIn: false,
        }
        case JUST_FETCH : return {
            ...state,
            fetching: true,
            error: ''
        }
        case SUCCESS_FETCH : return {
            ...state,
            fetching: false,
            error: '',
            friends: action.payload
        }
        case FAILURE_FETCH: return {
            ...state,
            error: 'This is an error'
          }
    default:
      return state;
    }
};