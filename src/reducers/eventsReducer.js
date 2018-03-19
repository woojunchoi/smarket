import * as actions from '../action/actions'

const initialState = {
    events:null
}

const events_reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.RECEIVE_DATA:
            return Object.assign({},state, {
                events:action.data.results
            })
        default:
            return state;
    }
}

export default events_reducer