import React, { Component } from 'react';
import {  Link } from "react-router-dom";

class List extends Component {

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
