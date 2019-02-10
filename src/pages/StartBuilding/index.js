import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pipe from 'components/Pipe'
import Page from 'components/Page'
import './styles.scss'

const NEXT_PAGE = '/watch-model';

class StartBuilding extends Component {
    startBuilding () {
        this.props.history.push(NEXT_PAGE);
    }

    render() {
        return (
            <Page color="#cc99ff" background="#280051" prevPage={'home'} currentPage={'start-building'}>
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
            </Page>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    { pure: false }
) (StartBuilding);
