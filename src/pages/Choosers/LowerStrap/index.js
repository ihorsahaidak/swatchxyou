import React, {Component} from 'react';
import {connect} from "react-redux";
import Configurator from 'components/Configurator'
import LowerStrapItem from 'components/Watch/LowerStrap'
import {getItems} from 'constants/Items'
import Pipe from 'components/Pipe'
import Page from 'components/Page'

const ITEMS_NAME = 'lowerstraps';

class LowerStrap extends Component {
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
                    <Configurator />
                    <div className={'bar-page'}>
                        <Pipe>
                            {items.map((code, index) =>
                                <LowerStrapItem key={index} code={code} history={history} />
                            )}
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
    dispatch => ({}),
    null,
    {pure: false}
) (LowerStrap);
