import React, { Component } from 'react';
import Configurator from 'components/Configurator'
import WatchHeadItem from 'components/Watch/WatchHead'

class WatchHead extends Component {
    render() {
        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    <WatchHeadItem code={ 111 } />
                    <WatchHeadItem code={ 222 } />
                    <WatchHeadItem code={ 333 } />
                </div>
            </div>
        );
    }
}

export default WatchHead;
