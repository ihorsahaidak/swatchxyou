import React, { Component } from 'react';
import { connect } from 'react-redux';

const DS = '/';
const ELEMENTS_FOLDER = 'accessories';

class Accessory extends Component {
    addAccessory (e) {
        this.props.onAddAccessory(e.currentTarget.dataset.code);
    }

    getImageSrcByCode (code, type) {
        return process.env.PUBLIC_URL + DS + 'images' + DS + this.props.watchmodel + DS + ELEMENTS_FOLDER + DS + type + DS + code + '.png';
    }

    render() {
        return (
            <div>
                <button onClick={ this.addAccessory.bind(this) } data-code={ this.props.code }>
                    <img src={ this.getImageSrcByCode(this.props.code, this.props.type) } alt=""/>
                </button>
            </div>
        );
    }
}

export default connect(
    state => ({
        accessories: state.accessories,
        watchmodel: state.watchmodel,
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
