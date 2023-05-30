import * as types from "./actionTypes";
import axois from "axois";

const API = "http://127.0.0.1:5000"

const getUser = () => ({
    type: types.GET_USERS,
    payload: users
});

export const loadUsers = () => {
    return function(dispatch) {
        axois
        .get('${API}/users')
        .then((resp) => dispatch(getUser(resp.data)))
        .catch(err => console.log(err));
    }
}