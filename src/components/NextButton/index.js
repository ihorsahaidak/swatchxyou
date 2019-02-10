import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles.scss'

class NextButton extends Component {
    goPath() {
        this.props.history.push(this.props.nextPagePath);
    }
    getStyles() {
        return {
            color: this.props.color,
            background: this.props.background,
        }
    }
    render() {
        return (
            <button className={'next-button'} onClick={this.goPath.bind(this)} style={this.getStyles()}>
                {this.props.children.toUpperCase()}
            </button>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    { pure: false }
) (NextButton);
