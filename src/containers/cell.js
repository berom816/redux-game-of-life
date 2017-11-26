import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCellAliveness} from '../actions';

class Cell extends Component{
  constructor(props){
    super(props);

    this.handleOnClickCell = this.handleOnClickCell.bind(this);
  }

  handleOnClickCell(){
    this.props.changeCellAliveness(this.props.index, this.props.alive);
  }

  render(){
    const className = `cell ${this.props.alive?'alive':'empty'}`;

    return(
      <div className={className} onClick={this.handleOnClickCell}></div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeCellAliveness}, dispatch);
}

export default connect(null, mapDispatchToProps)(Cell);
