export default function (state = {}, action) {
    if (action.type ===  'SET_CURRENT') {
        for (var key in state ) {
            if (state.hasOwnProperty(key)) {
                state[key] = false;
            }
        }

        state[action.payload] = true;
    }

    return state;
}
