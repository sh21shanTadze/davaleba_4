import React, { Component } from 'react';

class HoverConuter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        });
    };

    render() {
        const { count } = this.state;
        return (
            <h2 onMouseUpCapture={this.incrementCount}>Hoverd {count} time</h2>
        );
    }
}
export default HoverConuter;
