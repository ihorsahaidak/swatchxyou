import React from 'react';

import Configurator from 'components/Configurator'

class Loop extends React.Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        Loop
                    </div>
                </div>
            </div>
        );
    }
}

export default Loop;
