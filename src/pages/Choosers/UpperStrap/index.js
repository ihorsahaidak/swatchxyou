import React, { Component } from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import UpperStrapItem from 'components/Watch/UpperStrap'
import { getItems } from 'constants/Items'

const DEFAULT_ITEMS_NAME = 'upperstraps';

class UpperStrap extends Component {
    render() {
        let items = getItems(this.props.watchmodel);

        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    { items[DEFAULT_ITEMS_NAME].map((code, index) =>
                        <UpperStrapItem key={index} code={ code } history={ this.props.history } />
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
) (UpperStrap);
