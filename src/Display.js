import React from 'react';

class Display extends React.Component {

    render() {

        return (
			<div className="Suggest">
			<div className="Suggest-thumb"></div>
			<div className="Suggest-txt">{ this.props.testVal }</div>
			</div>
        );

    }

}

export default Display;