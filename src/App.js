import React, { Component } from 'react';
import store    from './store';
import {Provider}   from 'react-redux';

import logo from './logo.svg';
import './App.css';

import ButtonStart  from './components/ButtonStart';
import ButtonMusic  from './components/ButtonMusic';
import Country  from './components/Country';
import City from './components/City';
import Scores   from './components/Scores';
import Timer    from './components/Timer';
import WorldMap from './components/WorldMap';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">
                        Игра столицы мира
                        <ButtonMusic />
                    </h1>
                </header>
                <div className="App-intro">
                    <div className="d-flex h-1 w-500 m-auto justify-content-between">
                        <span><Timer /></span>
                        <span><Scores /></span>
                    </div>

                    <Country />
                    <City />
                    <ButtonStart />
                </div>
                <WorldMap />
            </div>
        </Provider>
    );
  }
}

export default App;
