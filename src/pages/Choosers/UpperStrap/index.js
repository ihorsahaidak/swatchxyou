import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import UpperStrapItem from 'components/Watch/UpperStrap'

class UpperStrap extends Component {
    render() {
        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    <UpperStrapItem code={ 111 } />
                    <UpperStrapItem code={ 222 } />
                    <UpperStrapItem code={ 333 } />
                </div>
            </div>
        );
    }
}

export default UpperStrap;
