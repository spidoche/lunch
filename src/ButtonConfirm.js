import React, { Component } from 'react';

class ButtonConfirm extends React.Component {

    clickHandler = () => {

        alert('OK');

    };

    render() {

        return (
            <button onClick={ this.clickHandler }>인정</button>
        );

    }

}

export default ButtonConfirm;
