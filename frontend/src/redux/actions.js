import * as types from "./actionTypes";
import axios from "axios";

const API = "http://127.0.0.1:5000"

const getUser = (users) => ({
    type: types.GET_USERS,
    payload: users
});

export const loadUsers = () => {
    return function(dispatch) {
        axios
        .get('${API}/users')
        .then((resp) => dispatch(getUser(resp.data)))
        .catch(err => console.log(err));
    }
}