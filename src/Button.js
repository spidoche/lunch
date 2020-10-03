import React, { Component } from 'react';

class Button extends React.Component {

    constructor(props){
        super(props);

        this.state = {foodList : [ 
            {id : 'gimbap',name : '김밥'}, 
            {id : 'bokkumbap',name : '볶음밥'}, 
            {id : 'mandukuk',name : '만두국'}, 
            {id : 'kalkuksu',name : '칼국수'}, 
            {id : 'sandwitch',name : '샌드위치'}, 
            {id : 'salad',name : '샐러드'}, 
            {id : 'ramyeon',name : '라면'}, 
            {id : 'vietnam',name : '베트남국수'}, 
            {id : 'donkasu',name : '돈까스'}, 
            {id : 'jaeyukbap',name : '제육덮밥'} ]}
    }
    
    clickHandler = () => {

        let arr_value = this.state.foodList;
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
