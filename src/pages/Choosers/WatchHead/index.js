import React from 'react';

import Configurator from 'components/Configurator'


class WatchHead extends React.Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />


                    <div className={'bar-page'}>
                        content
                    </div>
                </div>

            </div>
        );
    }
}

export default WatchHead;
