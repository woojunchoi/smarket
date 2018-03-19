import * as actions from '../action/actions'

const initialState = {
    detail:null
}

const detail_reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.RECEIVE_DETAIL:
            return Object.assign({},state, {
                detail:action.data
            })
        default:
            return state;
    }
}

export default detail_reducer