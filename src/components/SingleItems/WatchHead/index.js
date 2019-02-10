import React, {Component} from 'react';
import {connect} from "react-redux";

const ELEMENTS_FOLDER = 'watchheads';
const ALT = 'Watch Head';

class WatchHead extends Component {
    getImageSrcByCode (code) {
        return `${process.env.PUBLIC_URL}/images/${this.props.singleWatchmodel}/${ELEMENTS_FOLDER}/${code}.png`;
    }

    getStyles() {
        return {
            'top': this.props.top,
            'left': this.props.left,
        }
    }

    render() {
        return (
            <div>
                <div className={`single-item wow ${this.props.animationClassName}`} style={this.getStyles()} >
                    <img src={this.getImageSrcByCode(this.props.code) } alt={ALT} />
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        watchhead: state.watchhead,
    }),
    dispatch => ({
        onSetWatchHead: (i) => {
            dispatch({type: 'SET_WATCH_HEAD', payload: i});
        }
    }),
    null,
    {pure: false}
) (WatchHead);
