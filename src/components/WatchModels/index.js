import React, { Component } from 'react';
import './styles.scss'
import {connect} from "react-redux";


class WatchModels extends Component {
    render() {
        return (
            <div className={'watch-models-wrapper'}>
                { this.props.watchmodel }
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
) (WatchModels);
