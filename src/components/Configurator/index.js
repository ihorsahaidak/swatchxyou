import React, {Component} from 'react';
import {connect} from 'react-redux';
import Empty from 'components/Configurator/Empty'

import './styles.scss'

class Configurator extends Component {
    getImageSrc (subFolder, code, type = null) {
        return `${process.env.PUBLIC_URL}/images/${this.props.watchmodel}/${subFolder}/${code}.png`;
    }

    render() {
        return (
            <div className={`configurator-wrapper ${this.props.watchmodel}`}>
                <Empty />
                <div className={'c-upper-strap'}>
                    <img src={this.getImageSrc('upperstraps', this.props.upperstrap)} alt=""/>
                </div>
                <div className={'c-loop'}>
                    <img src={this.getImageSrc('loops', this.props.loop)} alt=""/>
                </div>
                <div className={'c-watch-head'}>
                    <img src={this.getImageSrc('watchheads', this.props.watchhead)} alt=""/>
                </div>
                <div className={'c-accessory'}>
                    <ul className="trackList">
                        {this.props.accessories.map((e, index) =>
                            <li key={index}>{e}</li>
                        )}
                    </ul>
                </div>
                <div className={'c-lower-strap'}>
                    <img src={this.getImageSrc('lowerstraps', this.props.lowerstrap)} alt=""/>
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
) (Configurator);
