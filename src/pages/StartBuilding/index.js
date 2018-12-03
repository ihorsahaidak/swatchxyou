import React from 'react';

import Pipe from 'components/Pipe'

class StartBuilding extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Pipe>


                        <div className="pipe-element text-element">
                            <div className="text">
                                <p className="bg-light-green">
                                    start
                                </p>
                            </div>
                        </div>
                        <div className="pipe-element text-element">
                            <div className="text">
                                <p className="bg-light-violet">
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
