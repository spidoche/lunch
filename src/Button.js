import React, { Component } from 'react';

class Button  extends Component{

    onButtonClick(){
        alert('Clicked');
    }

    render(){
        return (
            <button onClick={this.onButtonClick}>{this.props.title}</button>
        );
    }
};

export default Button;
