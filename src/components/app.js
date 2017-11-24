import React, { Component } from 'react';
import Footer from './footer';
import Game from '../containers/game';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          Game of Life
        </div>
        <Game/>
        <Footer/>
      </div>
    );
  }
}
