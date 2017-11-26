import React, {Component} from 'react';
import Generation from './generation';
import Controls from './controls';
import Board from './board';

export default class Game extends Component{
  render(){
    return(
      <div>
        <Controls/>
        <Generation/>
        <Board/>
      </div>
    )
  }
}
