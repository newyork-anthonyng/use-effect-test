import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleIncrementClick = this.handleIncrementClick.bind(this);
    }

    handleIncrementClick() {
        this.setState(previousState => {
            return { count: previousState.count + 1 }
        });
    }

    render() {
        return (
            <>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrementClick}>Increment</button>
            </>
        )
    }
}

export default Counter;