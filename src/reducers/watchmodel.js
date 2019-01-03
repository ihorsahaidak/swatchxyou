const GENT = 'gent';
const NEW_GENT = 'new gent';
const DEFAULT = GENT;

export default function watchmodel(state = DEFAULT, action) {
    if (action.type === 'SET_WATCH_MODEL') {
        if ([GENT, NEW_GENT].includes(action.payload)) {
            return action.payload
        }
    }

    return state;
}
