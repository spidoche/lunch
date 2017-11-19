import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import Display from './Display';
import Settings from './Settings';

import './App.css';


class App extends Component {
    constructor( props ) {

        super( props );

        this.state = {
            testVal: 'TEST'
        }

    }

    setTestVal = ( value ) => {

        this.setState( { testVal: value } );

    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> */}
                    <h1 className="App-title">오늘점심머꼬?</h1>
                </header>
                <p className="App-intro">
                    <Display testVal={ this.state.testVal } />
                    <br />
                    <Button setTestVal={ this.setTestVal } />
                    <Settings />
                </p>
            </div>
        );

    }
}

export default App;
