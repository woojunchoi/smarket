import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail:null
    }
  }

  componentDidMount() {
    const param = this.props.match.params.eventId
    axios.get(`https://cors-anywhere.herokuapp.com/https://fe-api.smarkets.com/v0/events/id/${param}`)
    .then(res => this.setState({
      detail:res.data
    }))
  }

  render() {
    console.log(this.state.detail)
    if(this.state.detail) {
      return (
        <div>
        <p>
          {this.state.detail.name}
        </p>
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
