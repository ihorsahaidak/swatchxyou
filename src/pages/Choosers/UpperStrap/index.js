import React, {Component} from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import UpperStrapItem from 'components/Watch/UpperStrap'
import { getItems } from 'constants/Items'
import Pipe from 'components/Pipe'

const ITEMS_NAME = 'upperstraps';

class UpperStrap extends Component {
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
                            <UpperStrapItem key={index} code={code} history={history} />
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
) (UpperStrap);
