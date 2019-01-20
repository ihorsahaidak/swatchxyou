export default function (state = null, action) {
    if (action.type === 'SET_LOWER_STRAP') {
        return action.payload;
    }

    return state;
}
