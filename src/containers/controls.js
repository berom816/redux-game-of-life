import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toNextGeneration} from '../actions';

class Controls extends Component{
  constructor(props){
    super();

    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext(){
    this.props.toNextGeneration();
  }

  render(){
    return(
      <div>
        <button>Start</button>
        <button onClick={this.onClickNext}>Next</button>
        <button>Stop</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({toNextGeneration}, dispatch);
}

export default connect(null, mapDispatchToProps)(Controls);
