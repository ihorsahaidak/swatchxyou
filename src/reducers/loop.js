const DEFAULT = '000';

export default function loop(state = DEFAULT, action) {
    if (action.type === 'SET_LOOP') {
        return action.payload;
    }

    return state;
}
