import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

//action types
export const FETCH_EVENTS = 'FETCH_EVENTS'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const FETCH_DETAIL = 'FETCH_DETAIL'
export const RECEIVE_DETAIL = 'RECEIVE_DETAIL'

//actions
export const receiveData = (data) => {
    return {
        type:RECEIVE_DATA,
        data
    }
}

export const receiveDetail = (data) => {
    return {
        type:RECEIVE_DETAIL,
        data
    }
}

export const fetchEvents = () => {
    return (dispatch) => {
        axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/',
        {cancelToken: source.token}
        )
        .then(res => dispatch(receiveData(res.data)))
    }
}

export const fetchDetail = (params) => {
    return (dispatch) => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/${params}`,
          {cancelToken: source.token}
        )
        .then(res => dispatch(receiveDetail(res.data)))
    }
}