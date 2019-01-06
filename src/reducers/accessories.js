export default function (state = [], action) {
    if (action.type === 'ADD_ACCESSORY') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'REMOVE_ACCESSORY') {
        return state;
    }

    return state;
}
