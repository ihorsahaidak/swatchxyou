import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import LowerStrapItem from 'components/Watch/LowerStrap'

class LowerStrap extends Component {
    render() {
        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    <LowerStrapItem code={ 111 } />
                    <LowerStrapItem code={ 222 } />
                    <LowerStrapItem code={ 333 } />
                </div>
            </div>
        );
    }
}

export default LowerStrap;
