import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {toNextGeneration, turnOnOff, createTimer, clearTimer} from '../actions';
import Generation from './generation';
import Controls from './controls';
import Board from './board';

class Game extends Component{
  //start the game when components are mounted
  componentDidMount(){
    const timer = setInterval(()=>{
      this.props.toNextGeneration();
    }, 200);
    this.props.createTimer(timer);
    this.props.turnOnOff(true);
  }

  render(){
    return(
      <div>
        <Controls/>
        <Generation/>
        <Board/>
      </div>
    )
  }

  //when component remove from DOM, clear timer
  componentWillUnmount(){
    this.props.clearTimer(this.props.timer);
  }
}

function mapStateToProps(state){
  return {
    gameON:state.gameON,
    timer:state.timer
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({toNextGeneration, turnOnOff, createTimer, clearTimer}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
