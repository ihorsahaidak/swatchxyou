import React, { Component } from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import AccessoryItem from 'components/Watch/Accessory'
import { getItems } from 'constants/Items'

const ACCESSORY_TYPE_LOOP_LARGE = 'loops_large';
const ACCESSORY_TYPE_PINS = 'pins';
const ACCESSORY_TYPE_RINGS = 'rings';

class Accessories extends Component {
    render() {
        let items = getItems(this.props.watchmodel);

        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        { items['accessories'][ACCESSORY_TYPE_LOOP_LARGE].map((code, index) =>
                            <AccessoryItem key={index} code={ code } type={ ACCESSORY_TYPE_LOOP_LARGE } history={ this.props.history } />
                        ) }
                    </div>

                    <hr/>

                    <div className={'bar-page'}>
                        { items['accessories'][ACCESSORY_TYPE_PINS].map((code, index) =>
                            <AccessoryItem key={index} code={ code } type={ ACCESSORY_TYPE_PINS } history={ this.props.history } />
                        ) }
                    </div>

                    <hr/>

                    <div className={'bar-page'}>
                        { items['accessories'][ACCESSORY_TYPE_RINGS].map((code, index) =>
                            <AccessoryItem key={index} code={ code } type={ ACCESSORY_TYPE_RINGS } history={ this.props.history } />
                        ) }
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
) (Accessories);
