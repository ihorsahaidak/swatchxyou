import React, { Component } from 'react';
import { connect } from "react-redux";

class WatchHead extends Component {
    setWatchHead (e) {
        this.props.onSetWatchHead(e.currentTarget.dataset.code);
    }

    render() {
        return (
            <button onClick={ this.setWatchHead.bind(this) } data-code={ this.props.code }>
                WH { this.props.code }
            </button>
        );
    }
}

export default connect(
    state => ({
        watchhead: state.watchhead,
    }),
    dispatch => ({
        onSetWatchHead: (i) => {
            dispatch({type: 'SET_WATCH_HEAD', payload: i});
        }
    }),
    null,
    { pure: false }
) (WatchHead);
