import React, {Component} from "react";

class CounterApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        // this.IncrementTheStateValue = this.IncrementTheStateValue.bind(this);
        // this.DecrementTheStateValue = this.DecrementTheStateValue.bind(this);
    }
    // not able to call this as its not calling the function itself
    // IncrementTheStateValue() {
    //     this.setState({value : this.state.value+1})
    // }
    // DecrementTheStateValue() {
    //     this.setState({value : this.state.value-1})
    // }
    render() {
        return (
            <div>
                <h1>Props: {this.props.name}</h1>
                <h1>{this.state.value}</h1>
                <button type='button' onClick={() => this.setState({ value: this.state.value+ 1 })}>Increment</button>
                <button type='button' onClick={() => this.state.value > 0 ? this.setState({ value: this.state.value- 1 }) : this.state.value}>Decrement</button>
                <button type='button' onClick={() => this.setState({ value: 0 })}>Reset</button>
            </div>
        )
    }
}

export default CounterApp