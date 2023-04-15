import React, {Component} from "react";

class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }
    IncrementTheStateValue = () => {
        this.setState({value : this.state.value+1})
    }
    DecrementTheStateValue = () => {
        if (this.state.value > 0) {
            this.setState({value : this.state.value-1})
        }
    }
    render() {
        return (
            <div>
                <h1>Props: {this.props.name}</h1>
                <h1>{this.state.value}</h1>
                <button type='button' onClick={this.IncrementTheStateValue}>Increment</button>
                <button type='button' onClick={this.DecrementTheStateValue}>Decrement</button>
                <button type='button' onClick={() => this.setState({ value: 0 })}>Reset</button>
            </div>
        )
    }
}

export default CounterApp