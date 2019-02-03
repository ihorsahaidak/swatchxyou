import React, {Component} from 'react';
import {connect} from "react-redux";

const ELEMENTS_FOLDER = 'watchheads';
const NEXT_PAGE = '/upper-strap';
const ALT = 'Watch Head';

class WatchHead extends Component {
    setWatchHead (e) {
        this.props.onSetWatchHead(e.currentTarget.dataset.code);
        this.props.history.push(NEXT_PAGE);
    }

    getImageSrcByCode (code) {
        return `${process.env.PUBLIC_URL}/images/${this.props.watchmodel}/${ELEMENTS_FOLDER}/${code}.png`;
    }

    render() {
        return (
            <div className={'pipe-element'}>
                <button className={'wow flipInY'} onClick={this.setWatchHead.bind(this)} data-code={this.props.code}>
                    <img src={this.getImageSrcByCode(this.props.code) } alt={ALT} />
                </button>
            </div>
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
    {pure: false}
) (WatchHead);
