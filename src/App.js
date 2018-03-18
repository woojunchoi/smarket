import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import axios from 'axios'

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
      events:res.data
    })
    )}

  render() {
    if(this.state.events === []) {
      return (
        <div>
          loading..
        </div>
      )
    }

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
