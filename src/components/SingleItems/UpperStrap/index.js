import React, {Component} from 'react';
import {connect} from "react-redux";

const ELEMENTS_FOLDER = 'upperstraps';
const ALT = 'Upper Strap';

class Upperstrap extends Component {
    getImageSrcByCode (code) {
        return `${process.env.PUBLIC_URL}/images/${this.props.singleWatchmodel}/${ELEMENTS_FOLDER}/${code}.png`;
    }

    getImageStyles() {
        let rotateDeg = this.props.rotateDeg ? this.props.rotateDeg : 0;

        return {
            'transform': `rotate(${rotateDeg}deg)`,
            'maxHeight': '360px'
        }
    }

    getWrapperStyles() {
        return {
            'top': this.props.top,
            'left': this.props.left,
        }
    }

    render() {
        return (
            <div>
                <div className={`single-item wow ${this.props.animationClassName}`} style={this.getWrapperStyles()} >
                    <img style={this.getImageStyles()} src={this.getImageSrcByCode(this.props.code) } alt={ALT} />
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        upperstrap: state.upperstrap,
    }),
    dispatch => ({}),
    null,
    {pure: false}
) (Upperstrap);
