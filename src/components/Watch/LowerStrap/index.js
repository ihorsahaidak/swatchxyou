import React, { Component } from 'react';
import { connect } from "react-redux";

const DS = '/';
const ELEMENTS_FOLDER = 'lowerstraps';

class LowerStrap extends Component {
    setLowerStrap (e) {
        this.props.onSetLowerStrap(e.currentTarget.dataset.code);
        this.props.history.push('/loop');

    }

    getImageSrcByCode (code) {
        return process.env.PUBLIC_URL + DS + 'images' + DS + this.props.watchmodel + DS + ELEMENTS_FOLDER + DS + code + '.png';
    }

    render() {
        return (
            <button className={ this.props.className } onClick={ this.setLowerStrap.bind(this) } data-code={ this.props.code }>
                <img src={ this.getImageSrcByCode(this.props.code) } alt=""/>
            </button>
        );
    }
}

export default connect(
    state => ({
        lowerstrap: state.lowerstrap,
        watchmodel: state.watchmodel,
    }),
    dispatch => ({
        onSetLowerStrap: (i) => {
            dispatch({type: 'SET_LOWER_STRAP', payload: i});
        }
    }),
    null,
    { pure: false }
) (LowerStrap);
