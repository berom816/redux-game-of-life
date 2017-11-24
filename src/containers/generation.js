import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toNextGeneration} from '../actions/index';

class Generation extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.generation}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {generation:state.generation}
}

export default connect(mapStateToProps)(Generation);
