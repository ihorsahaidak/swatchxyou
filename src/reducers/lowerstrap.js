const DEFAULT = '000';

export default function lowerstrap(state = DEFAULT, action) {
    if (action.type === 'SET_LOWER_STRAP') {
        return action.payload;
    }

    return state;
}
