import React, { Component } from 'react';
import { connect } from "react-redux";

class Loop extends Component {
    setLoop (e) {
        this.props.onSetLoop(e.currentTarget.dataset.code);
    }

    render() {
        return (
            <button onClick={ this.setLoop.bind(this) } data-code={ this.props.code }>
                L { this.props.code }
            </button>
        );
    }
}

export default connect(
    state => ({
        loop: state.loop,
    }),
    dispatch => ({
        onSetLoop: (i) => {
            dispatch({type: 'SET_LOOP', payload: i});
        }
    }),
    null,
    { pure: false }
) (Loop);
