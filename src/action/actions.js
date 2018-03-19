import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

//action types
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FETCH_DETAIL = 'FETCH_DETAIL'
export const RECEIVE_DETAIL = 'RECEIVE_DETAIL'
export const RESET_PROP = 'RESET_PROP'

//actions
export const resetProp = () => {
    return {
        type:RESET_PROP
    }
}

//action for setstate with using API (App.js)
export const receiveData = (data) => {
    return {
        type:RECEIVE_DATA,
        data
    }
}
//action for setstate with using API (Detail.js)
export const receiveDetail = (data) => {
    return {
        type:RECEIVE_DETAIL,
        data
    }
}

//API call (App.js)
export const fetchEvents = () => {
    return (dispatch) => {
        axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/',
        {cancelToken: source.token}
        )
        .then(res => dispatch(receiveData(res.data)))
    }
}

//API call (Detail.js)
export const fetchDetail = (params) => {
    return (dispatch) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/${params}`,
          {cancelToken: source.token}
        )
        .then(res => dispatch(receiveDetail(res.data)))
    }
}