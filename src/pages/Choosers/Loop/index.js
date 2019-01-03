import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import LoopItem from 'components/Watch/Loop'

class Loop extends Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        <LoopItem code={ 999 } />
                        <LoopItem code={ 222 } />
                        <LoopItem code={ 666 } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Loop;
