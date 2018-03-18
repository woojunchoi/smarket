import React, { Component } from 'react';


class List extends Component {
  constructor(props) {
    super(props)

  }



  render() {
    let populate = this.props.info.map((element,i) => {
      return <div className='collection-item' key={element.id}>{element.name}</div>
    })
    return (
      <div className='collection'>
        {populate}
      </div>
    );
  }
}

export default List
