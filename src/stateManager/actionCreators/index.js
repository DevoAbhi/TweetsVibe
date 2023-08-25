import * as api from '../../api/index.js';

/* basic syntax is ->
    action function which returns a function which takes dispatch as arg.
    now dispatch the type and payload
    easy.
*/


export const signupUser = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData);

        dispatch({
            type: "AUTH",
            payload: data
        })

        navigate("/dashboard");
    }

    catch (error) {
        console.log("Error while signing up -> ", error);
    }
}

export const loginUser = (formData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.login(formData);
        console.log(data);

        dispatch({
            type: "AUTH",
            payload: data
        })

        navigate("/dashboard");
    }

    catch (error) {
        console.log("Error while logging in -> ", error);
    }
}

export const logoutUser = (navigate) => (dispatch) => {
    try {
        dispatch({
            type: "LOGOUT"
        })

        navigate("/auth");
    }

    catch (error) {

    }
}

export const search = (formData) => async (dispatch) => {
    try {
        const {data} = await api.search(formData);
        console.log(data);

        dispatch({
            type: "SEARCH",
            payload: data
        })

        // navigate("/dashboard");
    }

    catch (error) {
        console.log("Error while searching word -> ", error);
    }
}

export const getAllSearchData = () => async (dispatch) => {
    try {
        const {data} = await api.getSearchData();
        console.log(data);

        dispatch({
            type: "GET SEARCH DATA",
            payload: data
        })

        // navigate("/dashboard");
    }

    catch (error) {
        console.log("Error while searching word -> ", error);
    }
}
