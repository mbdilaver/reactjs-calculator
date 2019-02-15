import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Calculator extends React.Component {
    render() {
        return (
            <div className="calculator">
                <Screen />
                <Keyboard />
            </div>
        );
    }
}

class Screen extends React.Component {
    render() {
        const expression = "0";

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
        return (
            <div className="keyboard">
                {/*First row*/}
                <button className="button clear-button">
                    Clear
                </button>
                <button className="button operation-button">
                    &#xd7;
                </button>
                <button className="button operation-button">
                    &#xf7;
                </button>

                {/*Second row*/}
                <button className="button">
                    7
                </button>
                <button className="button">
                    8
                </button>
                <button className="button">
                    9
                </button>
                <button className="button operation-button">
                    &#x2212;
                </button>

                {/*Third row*/}
                <button className="button">
                    4
                </button>
                <button className="button">
                    5
                </button>
                <button className="button">
                    6
                </button>
                <button className="button operation-button">
                    &#x002b;
                </button>

                {/*Fourth row*/}
                <button className="button">
                    1
                </button>
                <button className="button">
                    2
                </button>
                <button className="button">
                    3
                </button>
                <button className="button operation-button">
                    &#x003d;
                </button>
            </div>
        );
    }
}


ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);