const searchReducer = (state = { searchData: null }, action) => {
    switch (action.type) {
        case "SEARCH":
            // localStorage.setItem("profile", JSON.stringify(action?.payload));

            return { ...state, searchData: action.payload }

        default:
            return state;
    }
}

export default searchReducer;