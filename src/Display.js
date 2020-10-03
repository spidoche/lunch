import React from 'react';

class Display extends React.Component {

    render() {

        return (
			<div className="Suggest">
			<div className="Suggest-thumb"><img src={`../images/food/${this.props.food.id}.jpg`} alt="" /></div>
			<div className="Suggest-txt">{ this.props.food.name }</div>
			</div>
        );

    }

}

export default Display;