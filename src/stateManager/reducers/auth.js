const authReducer = (state = { userData: null }, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("profile", JSON.stringify(action?.payload));

            return { ...state, userData: action.payload }

        case "LOGOUT":
            localStorage.removeItem('profile');

            return { ...state, userData: null }

        default:
            return state;
    }
}

export default authReducer;