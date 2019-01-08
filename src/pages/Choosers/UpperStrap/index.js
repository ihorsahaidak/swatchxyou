import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import UpperStrapItem from 'components/Watch/UpperStrap'
import {connect} from "react-redux";

const DEFAULT_ITEMS_NAME = 'upperstraps';

class UpperStrap extends Component {
    render() {
        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    { this.props.defaults['gent'][DEFAULT_ITEMS_NAME].map((code, index) =>
                        <UpperStrapItem key={index} code={ code } />
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
) (UpperStrap);
