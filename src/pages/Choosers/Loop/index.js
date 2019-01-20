import React, { Component } from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import LoopItem from 'components/Watch/Loop'
import { getItems } from 'constants/Items'

class Loop extends Component {
    render() {
        let items = getItems(this.props.watchmodel);

        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        { items['loops'].map((code, index) =>
                            <LoopItem key={index} code={ code } history={ this.props.history } />
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
) (Loop);
