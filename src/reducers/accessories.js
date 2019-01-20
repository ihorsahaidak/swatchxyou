export default function (state = [], action) {
    switch(action.type) {
        case 'ADD_ACCESSORY':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_ACCESSORY':
            return state; // TODO remove accessory
        default:
            return state;
    }
}
