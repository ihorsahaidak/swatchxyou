const DEFAULT = '000';

export default function (state = DEFAULT, action) {
    if (action.type === 'SET_WATCH_HEAD') {
        return action.payload;
    }

    return state;
}
