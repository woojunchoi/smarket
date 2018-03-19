import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import axios from 'axios'
import Detail from './components/Detail'
import List from './components/List'
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events:null
    }
  }

  componentDidMount() {

    axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/',
    {cancelToken: source.token}
    )
    .then(res => this.setState({
      events:res.data.results
    })
    )}
  
  componentWillUnmount() {
    source.cancel('unmounted');
  }


  render() {
    if(this.state.events) {
      return (
        <div className='container'>
          <Route exact path ='/' render={(props) => <List {...props} info={this.state.events}/> }/>
          <Route exact path='/:eventId' render={(props) =>  <Detail {...props} info={this.state.events}/> }/>
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

export default App;
