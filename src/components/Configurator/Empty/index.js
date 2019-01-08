import React, { Component } from 'react';
import './styles.scss'
import EmptyNewGent from 'components/Configurator/Empty/NewGent'

class Empty extends Component {
    render() {
        return (
            <div className={ 'empty-watch-shape-wrapper' } >
                <EmptyNewGent />
            </div>
        );
    }
}

export default Empty;
