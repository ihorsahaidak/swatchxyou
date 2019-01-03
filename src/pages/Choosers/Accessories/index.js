import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import AccessoryItem from 'components/Watch/Accessory'

class Accessories extends Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        <AccessoryItem code={ 222 } />
                        <AccessoryItem code={ 777 } />
                        <AccessoryItem code={ 888 } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Accessories;
