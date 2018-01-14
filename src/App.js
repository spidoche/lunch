import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import Display from './Display';
import './App.css';


class App extends Component {
    constructor( props ) {

        super( props );

        this.state = {
            testVal: '?'
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
                    <h1 className="App-title">오늘 뭐먹지?</h1>
                </header>
                <p className="App-intro">
                    <Display testVal={ this.state.testVal } />
                    <br />
                    <Button setTestVal={ this.setTestVal } />
                </p>
            </div>
        );

    }
}

export default App;
