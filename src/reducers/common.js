export default function (state = null, action) {
    if (action.type === 'SET_LOOP') {
        return action.payload;
    }

    return state;
}
