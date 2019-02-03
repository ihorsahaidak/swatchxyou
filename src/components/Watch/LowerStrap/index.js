import React, {Component} from 'react';
import {connect} from "react-redux";

const ELEMENTS_FOLDER = 'lowerstraps';
const NEXT_PAGE = '/loop';
const ALT = 'Lower Strap';

class UpperStrap extends Component {
    setLowerStrap (e) {
        this.props.onSetLowerStrap(e.currentTarget.dataset.code);
        this.props.history.push(NEXT_PAGE);
    }

    getImageSrcByCode (code) {
        return `${process.env.PUBLIC_URL}/images/${this.props.watchmodel}/${ELEMENTS_FOLDER}/${code}.png`;
    }

    render() {
        return (
            <div className={'pipe-element'}>
                <button className={'wow flipInY'} onClick={this.setLowerStrap.bind(this)} data-code={this.props.code}>
                    <img src={this.getImageSrcByCode(this.props.code) } alt={ALT} />
                </button>
            </div>
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
    {pure: false}
) (UpperStrap);
