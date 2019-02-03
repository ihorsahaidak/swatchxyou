import React, {Component} from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        return (
            <div>
                welcome home
            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    {pure: false}
) (Home);
