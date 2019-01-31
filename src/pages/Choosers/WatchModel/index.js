import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pipe from 'components/Pipe'
import WatchModels from 'components/WatchModels'

class WatchModel extends Component {
    setWatchModel (e) {
        this.props.onSetWatchModel(e.currentTarget.dataset.value);
        this.props.history.push('/watch-head');
    }

    render() {
        return (
            <div className={'two-columns'}>
                <WatchModels/>
                <div className={'bar-page'}>
                    <Pipe>
                        <div className={ 'wow flipInY' } >
                            <button onClick={ this.setWatchModel.bind(this) } className="pipe-element watch-model-element" data-value="gent">
                                gent
                            </button>
                        </div>
                        <div className={ 'wow flipInY' }>
                            <button onClick={ this.setWatchModel.bind(this) } className="pipe-element watch-model-element" data-value="new_gent">
                                new_gent
                            </button>
                        </div>
                    </Pipe>
                </div>
            </div>
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
    { pure: false }
) (WatchModel);
