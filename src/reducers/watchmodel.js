import { getWatchModels } from 'constants/Items';

const WATCH_MODELS = getWatchModels();
const DEFAULT = Object.keys(WATCH_MODELS)[0];

export default function (state = DEFAULT, action) {
    if (action.type === 'SET_WATCH_MODEL') {
        if (action.payload in WATCH_MODELS) {
            return action.payload
        }
    }

    return state;
}
