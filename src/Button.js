import React, { Component } from 'react';

class Button extends React.Component {

    clickHandler = () => {

        var arr_value = [ '김밥', '볶음밥', '만두국', '칼국수', '샌드위치', '샐러드', '라면', '베트남국수', '돈까스', '제육덮밥' ];
        var value_food =  Math.floor( Math.random() * 10 ) % arr_value.length;
        var result = arr_value[value_food];

        this.props.setTestVal( result );

    };

    render() {

        return (
            <button onClick={ this.clickHandler }>Button</button>
        );

    }

}

export default Button;
