import React, { Component } from 'react';
import { connect } from 'react-redux';

class Accessory extends Component {
    addAccessory (e) {
        this.props.onAddAccessory(e.currentTarget.dataset.code);
    }

    render() {
        return (
            <div>
                <button onClick={ this.addAccessory.bind(this) } data-code={ this.props.code }>ADD { this.props.code }</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        accessories: state.accessories,
    }),
    dispatch => ({
        onAddAccessory: (i) => {
            dispatch({type: 'ADD_ACCESSORY', payload: i});
        },
        onRemoveAccessory: (i) => {
            dispatch({type: 'REMOVE_ACCESSORY', payload: i});
        },
    }),
    null,
    { pure: false }
) (Accessory);
