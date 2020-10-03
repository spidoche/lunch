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
            food: '돈까스'
        }

    }

    setFood = ( value ) => {

        this.setState( { food: value } );

    };

    render() {

        return (
            <div className="App">
                <div className="App-intro">
                    <Display food={ this.state.food } />
                    
                    <div className="Action-button">
                        <ButtonConfirm />
                        <Button setFood={ this.setFood } />
                    </div>
                </div>
            </div>
        );

    }
}

export default App;
