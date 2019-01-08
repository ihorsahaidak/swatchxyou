import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import LoopItem from 'components/Watch/Loop'
import {connect} from "react-redux";

class Loop extends Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        { this.props.defaults['gent']['loops'].map((code, index) =>
                            <LoopItem key={index} code={ code } />
                        ) }
                    </div>
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
) (Loop);
