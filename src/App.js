import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import axios from 'axios'
import Detail from './components/Detail'
import List from './components/List'
import { connect } from 'react-redux';
import * as actions from './action/actions'

const CancelToken = axios.CancelToken;
const source = CancelToken.source();


//pass states as props
const mapStateToProps = (store,ownProps) => ({
  events: store.events_reducer.events,
  detail: store.detail_reducer.detail,
});

//pass action dispatcher as props
const mapDispatchToProps = (dispatch) => ({
fetchEvents : () => dispatch(actions.fetchEvents()),
fetchDetail : (param) => dispatch(actions.fetchDetail(param)),
});

class App extends Component {

  componentDidMount() {
    this.props.fetchEvents()
  }
  
  componentWillUnmount() {
    source.cancel('unmounted');
  }


  render() {
    if(this.props.events) {
      return (
        <div className='container'>
          <Route exact path ='/' render={(props) => <List {...props} info={this.props.events}/> }/>
          <Route exact path='/:eventId' render={(props) =>  <Detail {...props} detail={this.props.detail} fetchDetail={this.props.fetchDetail}/> }/>
        </div>
      );
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
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));