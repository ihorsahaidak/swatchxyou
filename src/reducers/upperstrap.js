export default function (state = null, action) {
    if (action.type === 'SET_UPPER_STRAP') {
        return action.payload;
    }

    return state;
}
