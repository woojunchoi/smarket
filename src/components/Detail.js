import React, { Component } from 'react';
import axios from 'axios'
import '../css/Detail.css';
import Moment from 'react-moment'
import {Link} from'react-router-dom'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class Detail extends Component {

  componentDidMount() {
    this.props.fetchDetail(this.props.match.params.eventId)
  }

  componentWillUnmount() {
    source.cancel('unmounted');
  }

  render() {
    //if state is not null, dom manipulate with data from API
    if(this.props.detail !== null) {
      return (
        <div className ='detail-box'>
          <div className="row center-align">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <h4>{this.props.detail.event.name}</h4>
                <h5>League : {this.props.detail.event.event_type}</h5>
              </div>
              <div className="card-content white-text">
                <h5 style={{color:'black'}}><Moment format="MMMM Do YYYY hh:mm a">{this.props.detail.event.start_datetime}</Moment></h5>
                <h5 style={{color:'black'}}><Moment fromNow>{this.props.detail.event.start_datetime}</Moment></h5>
              </div>
            </div>
        </div>
          <div className='button-box'>
            <Link to='/'><div className="waves-effect waves-light btn" onClick={this.props.resetProp}>back</div></Link>
          </div>
      </div>
      )
    }
    return (
    //if state is null, print loading
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
