import React, {Component} from 'react';
import {connect} from "react-redux";
import './styles.scss';

class Empty extends Component {
    getImageSrc (name) {
        return `${process.env.PUBLIC_URL}/images/${this.props.watchmodel}/empty/${name}.png`;
    }

    render() {
        return (
            <div className={ 'empty-watch-shape-wrapper' } >
                <div className={ 'empty-shape' }>
                    <div>
                        <img src={this.getImageSrc('full_shadow')} alt=""/>
                        <img src={this.getImageSrc('needle_hours')} alt=""/>
                        <img src={this.getImageSrc('needle_minutes')} alt=""/>
                        <img src={this.getImageSrc('needle_seconds')} alt=""/>
                        <img src={this.getImageSrc('watch_black_logo')} alt=""/>
                        <img src={this.getImageSrc('buckle')} alt=""/>
                        <img src={this.getImageSrc('loop')} alt=""/>
                        <img src={this.getImageSrc('under_watch')} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        watchmodel: state.watchmodel,
    }),
    dispatch => ({}),
    null,
    {pure: false}
) (Empty);
