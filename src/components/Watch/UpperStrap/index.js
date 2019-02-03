import React, {Component} from 'react';
import {connect} from "react-redux";

const ELEMENTS_FOLDER = 'upperstraps';
const NEXT_PAGE = '/lower-strap';
const ALT = 'Upper Strap';

class UpperStrap extends Component {
    setUpperStrap (e) {
        this.props.onSetUpperStrap(e.currentTarget.dataset.code);
        this.props.history.push(NEXT_PAGE);
    }

    getImageSrcByCode (code) {
        return `${process.env.PUBLIC_URL}/images/${this.props.watchmodel}/${ELEMENTS_FOLDER}/${code}.png`;
    }

    render() {
        return (
            <div className={'pipe-element'}>
                <button className={'wow flipInY'} onClick={this.setUpperStrap.bind(this)} data-code={this.props.code}>
                    <img src={this.getImageSrcByCode(this.props.code) } alt={ALT} />
                </button>
            </div>
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
    {pure: false}
) (UpperStrap);
