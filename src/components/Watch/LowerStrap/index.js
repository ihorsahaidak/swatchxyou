import React, { Component } from 'react';
import { connect } from "react-redux";

class LowerStrap extends Component {
    setLowerStrap (e) {
        this.props.onSetLowerStrap(e.currentTarget.dataset.code);
    }

    render() {
        return (
            <button onClick={ this.setLowerStrap.bind(this) } data-code={ this.props.code }>
                LS { this.props.code }
            </button>
        );
    }
}

export default connect(
    state => ({
        lowerstrap: state.lowerstrap,
    }),
    dispatch => ({
        onSetLowerStrap: (i) => {
            dispatch({type: 'SET_LOWER_STRAP', payload: i});
        }
    }),
    null,
    { pure: false }
) (LowerStrap);
