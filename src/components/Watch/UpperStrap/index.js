import React, { Component } from 'react';
import { connect } from "react-redux";

const DS = '/';
const ELEMENTS_FOLDER = 'upperstraps';

class UpperStrap extends Component {
    setUpperStrap (e) {
        this.props.onSetUpperStrap(e.currentTarget.dataset.code);
        this.props.history.push('/lower-strap');
    }

    getImageSrcByCode (code) {
        return process.env.PUBLIC_URL + DS + 'images' + DS + this.props.watchmodel + DS + ELEMENTS_FOLDER + DS + code + '.png';
    }

    render() {
        return (
            <button onClick={ this.setUpperStrap.bind(this) } data-code={ this.props.code }>
                <img src={ this.getImageSrcByCode(this.props.code) } alt=""/>
            </button>
        );
    }
}

export default connect(
    state => ({
        upperstrap: state.upperstrap,
        watchmodel: state.watchmodel,
    }),
    dispatch => ({
        onSetUpperStrap: (i) => {
            dispatch({type: 'SET_UPPER_STRAP', payload: i});
        }
    }),
    null,
    { pure: false }
) (UpperStrap);
