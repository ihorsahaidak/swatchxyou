import React from 'react';

import Configurator from 'components/Configurator'

class LowerStrap extends React.Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        lower strap
                    </div>
                </div>
            </div>
        );
    }
}

export default LowerStrap;
