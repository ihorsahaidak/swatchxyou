const initialState = [
    'pl 1',
    'pl 2',
];

export default function playlists(state = initialState, action) {
    if (action.type === 'ADD_PLAYLIST') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'DELETE_PLAYLIST') {
        return state;
    }

    return state;
}
