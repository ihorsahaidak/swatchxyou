import React, { Component } from 'react';
import { connect } from "react-redux";

const DS = '/';
const ELEMENTS_FOLDER = 'loops';

class Loop extends Component {
    setLoop (e) {
        this.props.onSetLoop(e.currentTarget.dataset.code);
        this.props.history.push('/accessories');
    }

    getImageSrcByCode (code) {
        return process.env.PUBLIC_URL + DS + 'images' + DS + this.props.watchmodel + DS + ELEMENTS_FOLDER + DS + code + '.png';
    }

    render() {
        return (
            <button className={ this.props.className } onClick={ this.setLoop.bind(this) } data-code={ this.props.code }>
                <img src={ this.getImageSrcByCode(this.props.code) } alt=""/>
            </button>
        );
    }
}

export default connect(
    state => ({
        loop: state.loop,
        watchmodel: state.watchmodel,
    }),
    dispatch => ({
        onSetLoop: (i) => {
            dispatch({type: 'SET_LOOP', payload: i});
        }
    }),
    null,
    { pure: false }
) (Loop);
