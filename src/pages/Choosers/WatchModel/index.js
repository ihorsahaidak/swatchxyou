import React from 'react';
import { connect } from 'react-redux';
import Pipe from 'components/Pipe'
import WatchModels from 'components/WatchModels'

class WatchModel extends React.Component {
    setWatchModel (e) {
        this.props.onSetWatchModel(e.currentTarget.dataset.value);
    }
    render() {
        return (
            <div className={'two-columns'}>
                <WatchModels/>
                <div className={'bar-page'}>
                    <Pipe>
                        <div>
                            <button onClick={ this.setWatchModel.bind(this) } className="pipe-element watch-model-element" data-value="gent">
                                gent
                            </button>
                        </div>
                        <div>
                            <button onClick={ this.setWatchModel.bind(this) } className="pipe-element watch-model-element" data-value="new gent">
                                new gent
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
