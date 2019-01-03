import React, { Component } from 'react';
import { connect } from "react-redux";

class Preview extends Component {
    render() {
        return (
            <div>
                <div className={'c-upper-strap'}>
                    US  { this.props.upperstrap }
                </div>

                <div className={'c-loop'}>
                    L  { this.props.loop }
                </div>

                <div className={'c-watch-head'}>
                    WH  { this.props.watchhead }
                </div>

                <div className={'c-accessory'}>
                    <ul className="trackList">
                        { this.props.accessories.map((e, index) =>
                            <li key={index}>{e}</li>
                        ) }
                    </ul>
                </div>

                <div className={'c-lower-strap'}>
                    LS { this.props.lowerstrap }
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        watchhead: state.watchhead,
        upperstrap: state.upperstrap,
        lowerstrap: state.lowerstrap,
        accessories: state.accessories,
        loop: state.loop,
    }),
    dispatch => ({}),
    null,
    { pure: false }
) (Preview);
