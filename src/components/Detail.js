import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';
import moment from 'moment'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail:null
    }
  }

  componentDidMount() {
    const param = this.props.match.params.eventId
    axios.get(`https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/${param}`,
      {cancelToken: source.token}
    )
    .then(res => this.setState({
      detail:res.data
    }))
  }

  componentWillUnmount() {
    source.cancel('unmounted');
  }
  // (example: name, league, start time)

  render() {
    console.log(this.state.detail)


    if(this.state.detail) {
      return (
        <div className ='detail-box'>
        <div className="row center-align">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <h3>{this.state.detail.event.name}</h3>
              <h4>{this.state.detail.event.event_type} League</h4>
            </div>
            <div className="card-content white-text">
            <h4>{this.state.detail.event.start_datetime}</h4>
            </div>
          </div>
      </div>
      </div>
      )
    }
    return (
      <div className='container'>
      <div className="preloader-wrapper medium active">
      <div className="spinner-layer spinner-green-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
    </div>
    )
  }
}

export default Detail
