import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Event from './Event.js'

class List extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let populate = this.props.info.map((element,i) => {
      return  <Link className='collection-item' key={element.id} to={`/${element.id}`}>
      <div key={i}>{element.name}</div>
      </Link>
    })
    return (
      <div className='collection'>
            {populate}
      </div>
    );
  }
}

export default List
