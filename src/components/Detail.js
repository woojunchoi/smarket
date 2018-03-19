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
    console.log(this.props.detail)
    //if state is not null, dom manipulate with data from API
    if(this.props.detail !== null) {
      return (
        <div className ='detail-box'>
          <div className="row center-align">
            <div className="card">
              <div className="card-content white-text">
                <h5>{this.props.detail.event.name}</h5>
                <h6>topic : {this.props.detail.event.event_type}</h6>
                <h6>league : {this.props.detail.event.full_slug.split('/')[3]}</h6>
              </div>
              <div className="card-content white-text">
                <h6 style={{color:'#8c8c8c'}}><Moment format="MMMM Do YYYY hh:mm a">{this.props.detail.event.start_datetime}</Moment></h6>
                <p style={{color:'#8c8c8c'}}><Moment fromNow>{this.props.detail.event.start_datetime}</Moment></p>
              </div>
            </div>
        </div>
          <div className='button-box'>
            <Link to='/'><div className="btn" onClick={this.props.resetProp}>back</div></Link>
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
