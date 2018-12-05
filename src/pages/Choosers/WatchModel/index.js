import React from 'react';

import Pipe from 'components/Pipe'
import WatchModels from 'components/WatchModels'

class WatchModel extends React.Component {
    render() {
        return (
            <div>


                <div className={'two-columns'}>

                    <WatchModels/>

                    <div className={'bar-page'}>
                        <div>
                            <Pipe>


                                <div className="pipe-element watch-model-element">
                                    g
                                </div>
                                <div className="pipe-element watch-model-element">
                                    ng
                                </div>


                            </Pipe>
                        </div>
                    </div>
                </div>






            </div>
        );
    }
}

export default WatchModel;
