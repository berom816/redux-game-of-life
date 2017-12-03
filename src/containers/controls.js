import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toNextGeneration, clearCells, turnOnOff, createTimer, clearTimer} from '../actions';

class Controls extends Component{
  constructor(props){
    super(props);

    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleClearCells = this.handleClearCells.bind(this);
  }

  handleStart(){
    if(!this.props.gameON){
      const timer = setInterval(()=>{
        this.props.toNextGeneration();
      }, 200);
      this.props.turnOnOff(true);
      this.props.createTimer(timer);
    }
  }

  handleStop(){
    this.props.clearTimer(this.props.timer);
    this.props.turnOnOff(false);
  }

  handleClearCells(){
    this.props.turnOnOff(false);
    this.props.clearTimer(this.props.timer);
    this.props.clearCells();
  }

  render(){
    return(
      <div className='controls'>
        <button className='btn btn-default' onClick={this.handleStart}>Start</button>
        <button className='btn btn-default' onClick={this.handleStop}>Stop</button>
        <button className='btn btn-default' onClick={this.props.toNextGeneration}>Next</button>
        <button className='btn btn-default' onClick={this.handleClearCells}>Clear</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    gameON:state.gameON,
    timer:state.timer
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({toNextGeneration, clearCells, turnOnOff, createTimer, clearTimer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
