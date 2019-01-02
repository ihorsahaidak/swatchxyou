import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    addTrack () {
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref={ (input) => { this.trackInput = input } } />
                <button onClick={ this.addTrack.bind(this) }>add track</button>
                <ul className="trackList">
                    { this.props.tracks.map((track, index) =>
                        <li key={index}>{track}</li>
                    ) }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks,
        playlists: state.playlists,
    }),
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName});
        }
    }),
    null,
    { pure: false }
)(Home);
