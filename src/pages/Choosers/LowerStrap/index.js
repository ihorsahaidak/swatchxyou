import React, { Component } from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import LowerStrapItem from 'components/Watch/LowerStrap'
import { getItems } from 'constants/Items'

class LowerStrap extends Component {
    render() {
        let items = getItems(this.props.watchmodel);

        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    { items['lowerstraps'].map((code, index) =>
                        <LowerStrapItem key={index} code={ code } history={ this.props.history } />
                    ) }
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
) (LowerStrap);
