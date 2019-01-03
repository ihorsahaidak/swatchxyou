import React, { Component } from 'react';
import { connect } from "react-redux";

class UpperStrap extends Component {
    setUpperStrap (e) {
        this.props.onSetUpperStrap(e.currentTarget.dataset.code);
    }

    render() {
        return (
            <button onClick={ this.setUpperStrap.bind(this) } data-code={ this.props.code }>
                US { this.props.code }
            </button>
        );
    }
}

export default connect(
    state => ({
        upperstrap: state.upperstrap,
    }),
    dispatch => ({
        onSetUpperStrap: (i) => {
            dispatch({type: 'SET_UPPER_STRAP', payload: i});
        }
    }),
    null,
    { pure: false }
) (UpperStrap);
