import React from 'react';

import Mechanism from 'components/Configurator/Mechanism';

class Configurator extends React.Component {
    render() {
        return (
            <div className={'configurator-wrapper'}>


                <div>

                    <div className={'c-upper-strap'}>

                    </div>

                    <div className={'c-loop'}>

                    </div>

                    <div className={'c-watch-head'}>


                        <Mechanism />

                    </div>

                    <div className={'c-accessory'}>

                    </div>

                    <div className={'c-lower-strap'}>

                    </div>




                </div>



            </div>
        );
    }
}

export default Configurator;
