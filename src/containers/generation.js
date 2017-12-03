import React, {Component} from 'react';
import {connect} from 'react-redux';

class Generation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='generation'>
        Generation: {this.props.generation}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {generation:state.generation}
}

export default connect(mapStateToProps)(Generation);
