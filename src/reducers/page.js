export default function (state = null, action) {
    if (action.type === 'SET_PREV') {
        return action.payload;
    }

    return state;
}
