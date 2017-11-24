import React, {Component} from 'react';

export default function generation(){
  if(!this.props.currentGeneration){
    return <div>at no props</div>
  }

  return(
    <div>
      {this.props.currentGeneration}
    </div>
  )
}
