import React, {Component} from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import UpperStrapItem from 'components/Watch/UpperStrap'
import { getItems } from 'constants/Items'
import Pipe from 'components/Pipe'
import Page from 'components/Page'

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
            <Page color="#cc99ff" background="#280051">
                <div className={'two-columns'}>
                    <Configurator/>
                    <Pipe>
                        {items.map((code, index) =>
                            <UpperStrapItem key={index} code={code} history={history} />
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
) (UpperStrap);
