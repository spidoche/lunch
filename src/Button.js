import React, { Component } from 'react';

class Button extends React.Component {

    clickHandler = () => {

        var arr_value = [ 'test01', 'test02', 'test03', 'test04', 'test05', 'test06', 'test07', 'test08', 'test09', 'test10' ];
        var result    = arr_value[ Math.floor( Math.random() * 10 ) % arr_value.length ];

        this.props.setTestVal( result );

    };

    render() {

        return (
            <button onClick={ this.clickHandler }>Button</button>
        );

    }

}

export default Button;
