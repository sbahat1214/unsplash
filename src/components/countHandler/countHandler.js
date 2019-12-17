import React, { Component }from 'react';

class CountHandler extends Component {
    render () {
        return (
            <div>
                <p>Count: {this.props.count} </p>
            </div>
        );
    }
}

export default CountHandler;