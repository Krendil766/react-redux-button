const initialState = {
    lightTheme: false,
    theme:'white'
}

const reducer = (state=initialState, action) => {
    if (action.type === 'SWITCH_THEME') {
        return {
            ...state,
            lightTheme: action.payload
        }
    }
    if (action.type === 'BLACK') {
        return {
            ...state,
            theme:'black'
        }
    } else if (action.type === 'RED') {
        return {
            ...state,
            theme:'red'
        }
    } else if (action.type === "WHITE") {
        return {
            ...state,
            theme:'white'
        }
    }
    return state
}

export default reducer;