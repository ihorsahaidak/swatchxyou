import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pipe from 'components/Pipe'
import './styles.scss'

const NEXT_PAGE = '/watch-model';

class StartBuilding extends Component {
    startBuilding () {
        this.props.history.push(NEXT_PAGE);
    }

    render() {
        return (
            <div className={'full-view'}>
                <Pipe>
                    <div className="pipe-element">
                        <div className="wow flipInY">
                            <button onClick={this.startBuilding.bind(this)}>
                                start
                            </button>
                        </div>
                    </div>
                    <div className="pipe-element">
                        <div className="wow flipInY">
                            <button onClick={this.startBuilding.bind(this)}>
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
