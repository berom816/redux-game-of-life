import React, {Component} from 'react';
import Generation from './generation';
import Controls from './controls';

export default class Game extends Component{
  render(){
    return(
      <div>
        <Controls/>
        <Generation/>
      </div>
    )
  }
}
