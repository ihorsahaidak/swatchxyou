import React from 'react';

import './styles.scss'

class Pipe extends React.Component {
    render() {
        return (
            <div className="piper">
                <div className="pipin">
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Pipe;
