import axios from "axios";

const initialState = {
    user: {},
    error: ""
};

// Action Types
const LOGIN = "Login";
const REGISTER = "Register";
const GET_USER = "Get_User";


// Actions Creators
export function login( username, password) {
    return {
        type: LOGIN,
        payload: axios.post("/auth/login", { username: username, password })
    };
};

export function register(username, password) {
    return {
      type: SIGN_UP,
      payload: axios.post("/auth/register", { username, password })
    };
};

export function getUser() {
    return {
      type: GET_USER,
      payload: axios.get("/auth/user")
    };
};


// Reducer Function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case LOGIN + "_REJECTED":
            return { ...state, error: "Bad Login" };
        case REGISTER + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case REGISTER + "_REJECTED":
            return { ...state, error: "Bad Register" };
        case GET_USER + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case GET_USER + "_REJECTED":
            return { ...state, error: "Bad User" };
        default:
            return state;
    };
};