import React from 'react';

class Display extends React.Component {

    render() {

        return (
            <span>{ this.props.testVal }</span>
        );

    }

}

export default Display;