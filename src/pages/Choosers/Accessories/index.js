import React from 'react';

import Configurator from 'components/Configurator'

class Accessories extends React.Component {
    render() {
        return (
            <div>
                <div className={'two-columns'}>
                    <Configurator />
                    <div className={'bar-page'}>
                        Accessories
                    </div>
                </div>
            </div>
        );
    }
}

export default Accessories;
