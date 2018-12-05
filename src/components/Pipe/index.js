import React from 'react';

import './styles.scss'

class Pipe extends React.Component {
    render() {
        return (
            <div className={'piper ' + this.props.color}>
                <div className={'pipin '+ this.props.color}>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Pipe;
