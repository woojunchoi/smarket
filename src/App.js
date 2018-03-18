import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import axios from 'axios'
import Detail from './components/Detail'
import List from './components/List'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events:[]
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/popular/')
    .then(res => this.setState({
      events:res.data.results
    })
    )}


  render() {


    return (
      <div className="container">
        <Route exact path ='/' render={(props) => <List {...props} info={this.state.events}/> }/>
        <Route exact path='/:eventId' render={(props) =>  <Detail {...props} info={this.state.events}/> }/>
      </div>
    );
  }
}

export default App;
