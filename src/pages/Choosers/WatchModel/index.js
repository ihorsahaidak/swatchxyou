import React, {Component} from 'react';
import {connect} from 'react-redux';
import WatchModels from 'components/WatchModels'
import Pipe from 'components/Pipe'
import Page from 'components/Page'

const NEXT_PAGE = '/watch-head';

class WatchModel extends Component {
    setWatchModel (e) {
        this.props.onSetWatchModel(e.currentTarget.dataset.value);
        this.props.history.push(NEXT_PAGE);
    }

    render() {
        return (
            <Page color="#cc99ff" background="#280051">
                <div className={'two-columns'}>
                    <WatchModels/>
                    <div className={'bar-page'}>
                        <Pipe>
                            <div className={'pipe-element'} >
                                <button onClick={ this.setWatchModel.bind(this) } className="wow flipInY" data-value="gent">
                                    gent
                                </button>
                            </div>
                            <div className={'pipe-element'}>
                                <button onClick={ this.setWatchModel.bind(this) } className="wow flipInY" data-value="new_gent">
                                    new_gent
                                </button>
                            </div>
                        </Pipe>
                    </div>
                </div>
            </Page>
        );
    }
}

export default connect(
    state => ({
        watchmodel: state.watchmodel,
    }),
    dispatch => ({
        onSetWatchModel: (i) => {
            dispatch({type: 'SET_WATCH_MODEL', payload: i});
        }
    }),
    null,
    {pure: false}
) (WatchModel);
