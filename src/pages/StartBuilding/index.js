import React from 'react';

import './styles.scss'


import Pipe from 'components/Pipe'

class StartBuilding extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={'full-view light-violet'}>
                <Pipe color={'light-violet'}>


                        <div className="pipe-element text-element">
                            <div className="text wow flipInY">
                                <p className="bg-light-green">
                                    start
                                </p>
                            </div>
                        </div>
                        <div className="pipe-element text-element">
                            <div className="text wow flipInY">
                                <p className="bg-violet">
                                    building
                                </p>
                            </div>
                        </div>


                </Pipe>



            </div>
        );
    }
}

export default StartBuilding;
