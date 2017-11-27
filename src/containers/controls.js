import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toNextGeneration} from '../actions';
import {clearCells} from '../actions';

class Controls extends Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <div>
        <button>Start</button>
        <button>Stop</button>
        <button onClick={this.props.toNextGeneration}>Next</button>
        <button onClick={this.props.clearCells}>Clear</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({toNextGeneration, clearCells}, dispatch);
}

export default connect(null, mapDispatchToProps)(Controls);
