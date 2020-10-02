import React, { Component } from 'react';

class ButtonConfirm extends React.Component {

    clickHandler = () => {

        alert('맛있게 드세요!');

    };

    render() {

        return (
            <button onClick={ this.clickHandler }>인정</button>
        );

    }

}

export default ButtonConfirm;
