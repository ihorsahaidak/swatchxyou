import React, {Component} from 'react';
import {connect} from "react-redux";

const ELEMENTS_FOLDER = 'watchheads';
const ALT = 'Watch Head';

class WatchHead extends Component {
    getImageSrcByCode (code) {
        return `${process.env.PUBLIC_URL}/images/${this.props.singleWatchmodel}/${ELEMENTS_FOLDER}/${code}.png`;
    }

    getStyles() {
        let rotateDeg = this.props.rotateDeg ? this.props.rotateDeg : 0

        return {
            'top': this.props.top,
            'left': this.props.left,
            'transform': `rotate(${rotateDeg}deg)`
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
    dispatch => ({}),
    null,
    {pure: false}
) (WatchHead);
