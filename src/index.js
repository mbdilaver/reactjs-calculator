import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as math from 'mathjs';

const operations = ['*', '/', '+', '-', '='];

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expression: '0',
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);

    }

    isComplete(exp) {
        if (this.isOperation(exp.slice(-1))) {
            return false;
        }
        return true;
    }

    isOperation(digit) {
        if (operations.indexOf(digit) === -1) {
            return false;
        }
        return true;
    }

    handleButtonClick(event) {
        let newExpression = "";
        const expression = this.state.expression;
        const input = event.target.value;

        if (input === 'clear') {
            newExpression = '0'
        } else if (expression === '0' && !this.isOperation(input)) {
            newExpression = input;
        } else if (this.isComplete(expression) && input === '=') {
            newExpression = math.eval(expression).toString();
        } else if (!this.isComplete(expression) && this.isOperation(input)){
            newExpression = expression;
        } else {
            newExpression = expression + input;
        }

        this.setState({
            expression: newExpression,
        })
    }

    render() {
        const buttons = this.props.buttons;

        return (
            <div className="calculator">
                <Screen expression={this.state.expression}/>
                <Keyboard handleButtonClick={this.handleButtonClick}
                    buttons={buttons}/>
            </div>
        );
    }
}

class Screen extends React.Component {
    render() {
        const expression = this.props.expression;

        return (
            <div className="screen">
                <p className="expression">
                    {expression}
                </p>
            </div>
        );
    }
}

class Keyboard extends React.Component {
    render() {
        const buttons = this.props.buttons;

        return (
            <div className="keyboard">
                {buttons.map((button) => {
                    return (
                            <button className={"button " + button.className}
                                value={button.value}
                                onClick={this.props.handleButtonClick}
                                key={button.value}
                            >
                                {button.text}
                            </button>
                        );
                    })
                }
            </div>
        );
    }
}

const BUTTONS = [
    {text: "Clear", value: "clear", className: "clear-button"},
    {text: "\u00d7", value: "*", className: "operation-button"},
    {text: "\u00f7", value: "/", className: "operation-button"},
    {text: "7", value: "7", className: ""},
    {text: "8", value: "8", className: ""},
    {text: "9", value: "9", className: ""},
    {text: "\u2212", value: "-", className: "operation-button"},
    {text: "4", value: "4", className: ""},
    {text: "5", value: "5", className: ""},
    {text: "6", value: "6", className: ""},
    {text: "\u002b", value: "+", className: "operation-button"},
    {text: "1", value: "1", className: ""},
    {text: "2", value: "2", className: ""},
    {text: "3", value: "3", className: ""},
    {text: "\u003d", value: "=", className: "operation-button"},
]

ReactDOM.render(
    <Calculator buttons={BUTTONS}/>,
    document.getElementById('root')
);