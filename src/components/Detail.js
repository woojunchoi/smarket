import React, { Component } from 'react';
import axios from 'axios'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail:{}
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
    return (
      <div>
      </div>
    );
  }
}

export default Detail
