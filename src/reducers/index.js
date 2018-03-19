import { combineReducers } from 'redux';
import events_reducer from './eventsReducer'
import detail_reducer from './detailReducer'
// import all reducers here


// combine reducers
const reducers = combineReducers({
    events_reducer,
    detail_reducer
});

// make the combined reducers available for import
export default reducers;

