import React, {Component} from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import WatchHeadItem from 'components/Watch/WatchHead'
import {getItems} from 'constants/Items'
import Pipe from 'components/Pipe'

const ITEMS_NAME = 'watchheads';

class WatchHead extends Component {
    getItems () {
        let items = getItems(this.props.watchmodel)[ITEMS_NAME];

        if (items) {
            return items
        }

        return [];
    }

    render() {
        let items = this.getItems();
        let history = this.props.history;

        return (
            <div className={'two-columns'}>
                <Configurator />
                <div className={'bar-page'}>
                    <Pipe>
                        {items.map((code, index) =>
                            <WatchHeadItem key={index} code={code} history={history} />
                        )}
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
    dispatch => ({}),
    null,
    {pure: false}
) (WatchHead);
