import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import WatchHeadItem from 'components/Watch/WatchHead'
import {connect} from "react-redux";

const DEFAULT_ITEMS_NAME = 'watchheads';

class WatchHead extends Component {
    render() {
        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    { this.props.defaults['gent'][DEFAULT_ITEMS_NAME].map((code, index) =>
                        <WatchHeadItem key={index} code={ code } />
                    ) }
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        defaults: state.defaults,
    }),
    dispatch => ({}),
    null,
    { pure: false }
) (WatchHead);
