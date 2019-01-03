const DEFAULT = '000';

export default function upperstrap(state = DEFAULT, action) {
    if (action.type === 'SET_UPPER_STRAP') {
        return action.payload;
    }

    return state;
}
