import React from 'react';

import Configurator from 'components/Configurator'

class UpperStrap extends React.Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        upper strap
                    </div>
                </div>
            </div>
        );
    }
}

export default UpperStrap;
