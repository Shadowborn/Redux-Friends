// I need axios
import axios from 'axios';

import { axiosWithAuth } from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ABSOLUTE_FAILURE = "LOGIN_ABSOLUTE_FAILURE";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => {
            console.log("Login data", res.data);
            localStorage.setItem("token", res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
        })
        .catch(err => console.log(err))
}

// I need to create 3 different action types here
// one for fetching, one for success and one for failure
// Actions are payloads of information that send data from 
// your application to your store. They are the only source
// of information for the store.
export const JUST_FETCH = 'JUST_FETCH';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';
export const FAILURE_FETCH = 'FAILURE_FETCH';


// I need to make an action creator that will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now I have control over our thunk-based action creator
// because thunk action creators return a function instead of an action
// the thunk can be used to delay the dispatch of an action, or to dispatch
// only if a certain condition is met

export const fetchMyFriends = () => dispatch => {
    dispatch({ type : JUST_FETCH })
    axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type : SUCCESS_FETCH, payload: res.data })
                console.log("Fetch data", res.data);
            })
        .catch(err => {
            dispatch({type:FAILURE_FETCH})
            console.log("Axios call error", err);
        })
}