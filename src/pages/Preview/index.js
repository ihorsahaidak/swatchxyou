import React, {Component} from 'react';
import {connect} from "react-redux";

class Preview extends Component {
    getImageSrcByCode (subFolder, code, type = null) {
        if (!code) {
            return '';
        }

        return `${process.env.PUBLIC_URL}/images/${this.props.watchmodel}/${subFolder}/${(type ? `${type}/` : '')}${code}.png`;
    }

    render() {
        return (
            <div>
                <h1>PREVIEW PAGE</h1>
                <div className={'c-upper-strap'}>
                    <img src={ this.getImageSrcByCode('upperstraps', this.props.upperstrap) } alt=""/>
                </div>
                <div className={'c-loop'}>
                    <img src={ this.getImageSrcByCode('loops', this.props.loop) } alt=""/>
                </div>
                <div className={'c-watch-head'}>
                    <img src={ this.getImageSrcByCode('watchheads', this.props.watchhead) } alt=""/>
                </div>
                <div className={'c-accessory'}>
                    <ul className="trackList">
                        { this.props.accessories.map((e, index) =>
                            <li key={index}>{e}</li>
                        ) }
                    </ul>
                </div>
                <div className={'c-lower-strap'}>
                    <img src={ this.getImageSrcByCode('lowerstraps', this.props.lowerstrap) } alt=""/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        watchmodel: state.watchmodel,
        watchhead: state.watchhead,
        upperstrap: state.upperstrap,
        lowerstrap: state.lowerstrap,
        accessories: state.accessories,
        loop: state.loop,
    }),
    dispatch => ({}),
    null,
    {pure: false}
) (Preview);
