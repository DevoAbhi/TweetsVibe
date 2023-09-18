const searchReducer = (state = { searchData: null, searchResults: null }, action) => {
    switch (action.type) {
        case "SEARCH":
            // localStorage.setItem("profile", JSON.stringify(action?.payload));

            return { ...state, searchResults: action.payload }

        case "GET SEARCH DATA":

            return {...state, searchData: action.payload}

        default:
            return state;
    }
}

export default searchReducer;