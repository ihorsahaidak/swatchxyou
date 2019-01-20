import React, { Component } from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import AccessoryItem from 'components/Watch/Accessory'
import { getItems } from 'constants/Items'

class Accessories extends Component {
    render() {

        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        <AccessoryItem code={ 222 } history={ this.props.history } />
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    { pure: false }
) (Accessories);
