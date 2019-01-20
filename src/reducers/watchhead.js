export default function (state = null, action) {
    if (action.type === 'SET_WATCH_HEAD') {
        return action.payload;
    }

    return state;
}
