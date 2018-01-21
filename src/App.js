import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import ButtonConfirm from './ButtonConfirm';
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
                <div className="App-intro">
                    <Display testVal={ this.state.testVal } />
                    
                    <ButtonConfirm />
					<Button setTestVal={ this.setTestVal } />
                </div>
            </div>
        );

    }
}

export default App;
