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
    // let populate = this.state.events.map((element,i) => {
    //   return <Link className='collection-item'key={i} to={`/${element.id}`}><div key={element.id} info={this.state.events[i]}>{element.name}</div></Link>
    // })

    return (
      <div className="container">
        <Route exact path ='/' render={(props) => <List {...props} info={this.state.events}/> }/>
      </div>
    );
  }
}

export default App;
