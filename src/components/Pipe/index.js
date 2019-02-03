import React, { Component } from 'react';

import './styles.scss'

class Pipe extends Component {
    getColor () {
        let color = this.props.color;

        if (color) {
            return ` ${color}`;
        }

        return '';
    }

    render() {
        return (
            <div className={`piper${this.getColor()}`}>
                <div className={`pipin${this.getColor()}`}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Pipe;
