import React, { Component } from 'react';
import Game from '../containers/game';
import Footer from './footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>
          Game of Life
        </div>
        <Game/>
        <Footer/>
      </div>
    );
  }
}
