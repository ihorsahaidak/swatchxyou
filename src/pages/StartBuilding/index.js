import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.scss'
import Pipe from 'components/Pipe'

class StartBuilding extends Component {
    startBuilding () {
        this.props.history.push('/watch-model');
    }

    render() {
        return (
            <div className={'full-view light-violet'}>
                <Pipe color={'light-violet'}>
                        <div className="pipe-element text-element">
                            <div className="text wow flipInY">
                                <button onClick={ this.startBuilding.bind(this) } className="bg-light-green">
                                    start
                                </button>
                            </div>
                        </div>
                        <div className="pipe-element text-element">
                            <div className="text wow flipInY">
                                <button onClick={ this.startBuilding.bind(this) } className="bg-violet">
                                    building
                                </button>
                            </div>
                        </div>
                </Pipe>
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    { pure: false }
) (StartBuilding);
