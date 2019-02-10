import React, { Component } from 'react';

import './styles.scss'

class Pipe extends Component {
    getPipinStyles() {
        let background = this.props.background;
        let color = this.props.color;

        return {
            'color': color,
            'background': background,
            'boxShadow': `0 0 0.4375em 0.25em #ccc, inset -25px 15px 30px ${background}, inset -25px 15px 30px #000`
        };
    }
    getPiperStyles() {
        return {
            'marginTop' : this.props.topOffset,
            'boxShadow': `inset 0 0 0.4375em 0.25em #ccc, -30px 25px 50px ${this.props.background}, -30px 25px 25px #000`
        }
    }

    render() {
        return (
            <div className={'piper'} style={this.getPiperStyles()}>
                <div className={'pipin'} style={this.getPipinStyles()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Pipe;
