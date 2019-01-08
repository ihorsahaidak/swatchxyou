import { combineReducers } from 'redux';
import defaults from './defaults';
import watchmodel from './watchmodel';
import watchhead from './watchhead';
import upperstrap from './upperstrap';
import lowerstrap from './lowerstrap';
import accessories from './accessories';
import loop from './loop';

export default combineReducers({
    defaults,
    watchmodel,
    watchhead,
    upperstrap,
    lowerstrap,
    accessories,
    loop,
})
