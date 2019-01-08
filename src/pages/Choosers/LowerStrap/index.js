import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import LowerStrapItem from 'components/Watch/LowerStrap'
import {connect} from "react-redux";

class LowerStrap extends Component {
    render() {
        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    { this.props.defaults['gent']['lowerstraps'].map((code, index) =>
                        <LowerStrapItem key={index} code={ code } />
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
) (LowerStrap);
