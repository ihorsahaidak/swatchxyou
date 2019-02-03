import React, {Component} from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import WatchHeadItem from 'components/Watch/WatchHead'
import {getItems} from 'constants/Items'
import Pipe from 'components/Pipe'
import Page from 'components/Page'

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
            <Page color="#cc99ff" background="#280051">
                <div className={'two-columns'}>
                    <Configurator/>
                    <Pipe>
                        {items.map((code, index) =>
                            <WatchHeadItem key={index} code={code} history={history} />
                        )}
                    </Pipe>
                </div>
            </Page>
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
