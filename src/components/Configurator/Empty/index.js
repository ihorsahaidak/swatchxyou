import React, { Component } from 'react';
import { connect } from "react-redux";
import './styles.scss';

const DS = '/';
const IMAGE_URL_PREFIX = process.env.PUBLIC_URL + '/images/';

class Empty extends Component {
    render() {
        let watchModel = this.props.watchmodel;

        return (
            <div className={ 'empty-watch-shape-wrapper' } >
                <div className={ 'empty-shape empty-new-gent' }>
                    <div>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/full_shadow.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/needle_hours.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/needle_minutes.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/needle_seconds.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/watch_black_logo.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/buckle.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/loop.png'} alt=""/>
                        <img src={IMAGE_URL_PREFIX + DS + watchModel + DS + 'empty/under_watch.png'} alt=""/>
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
    { pure: false }
) (Empty);
