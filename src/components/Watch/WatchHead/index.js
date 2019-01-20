import React, { Component } from 'react';
import { connect } from "react-redux";

const DS = '/';
const ELEMENTS_FOLDER = 'watchheads';

class WatchHead extends Component {
    setWatchHead (e) {
        this.props.onSetWatchHead(e.currentTarget.dataset.code);
        this.props.history.push('/upper-strap');
    }

    getImageSrcByCode (code) {
        return process.env.PUBLIC_URL + DS + 'images' + DS + this.props.watchmodel + DS + ELEMENTS_FOLDER + DS + code + '.png';
    }

    render() {
        return (
            <button onClick={ this.setWatchHead.bind(this) } data-code={ this.props.code }>
                <img src={ this.getImageSrcByCode(this.props.code) } alt=""/>
            </button>
        );
    }
}

export default connect(
    state => ({
        watchhead: state.watchhead,
        watchmodel: state.watchmodel,
    }),
    dispatch => ({
        onSetWatchHead: (i) => {
            dispatch({type: 'SET_WATCH_HEAD', payload: i});
        }
    }),
    null,
    { pure: false }
) (WatchHead);
