import React, { Component } from 'react';

class Button extends React.Component {

    clickHandler = () => {

        let arr_value = [ '김밥', '볶음밥', '만두국', '칼국수', '샌드위치', '샐러드', '라면', '베트남국수', '돈까스', '제육덮밥' ];
        let value_food =  Math.floor( Math.random() * 10 ) % arr_value.length;
        let result = arr_value[value_food];

        this.props.setFood( result );

    };

    render() {

        return (
            <button onClick={ this.clickHandler }>노인정</button>
        );

    }

}

export default Button;
