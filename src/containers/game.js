import React, {Component} from 'react';
import {connect} from 'react-redux';
import Generation from '../components/generation';


class Game extends Component{
  constructor(props){
    super(props);
  }

  render(){
    // if(!this.props.currentGeneration){
    //   return <div>at no props</div>
    // }

    return(
      <div>
        <Generation currentGeneration={this.props.currentGeneration} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {currentGeneration:state.generation};
}

export default connect(mapStateToProps)(Game);
