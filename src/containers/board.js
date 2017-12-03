import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Cell from './cell';

class Board extends Component{
  constructor(props){
    super(props);

    this.renderCells = this.renderCells.bind(this);
  }

  renderCells(){
    return _.map(this.props.cells, (cell)=>{
      return <Cell key={cell.index} alive={cell.alive} index={cell.index}/>
    })
  }

  render(){
    if(!this.props.cells){
      return(
        <div>Loading</div>
      )
    }
    return(
      <div className='board'>
        {this.renderCells()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {cells:state.cells};
}

export default connect(mapStateToProps)(Board);
