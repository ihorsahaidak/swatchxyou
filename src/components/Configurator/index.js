import React, { Component } from 'react';
import { connect } from 'react-redux';
import Empty from 'components/Configurator/Empty'

class Configurator extends Component {
    render() {
        return (
            <div className={'configurator-wrapper'}>

                <Empty />

                <div className={'c-upper-strap'}>


                    <img src={process.env.PUBLIC_URL + '/images/gent/upperstraps/' + this.props.upperstrap + '.png'} alt=""/>

                </div>

                <div className={'c-loop'}>

                    <img src={process.env.PUBLIC_URL + '/images/gent/loops/' + this.props.loop + '.png'} alt=""/>

                </div>

                <div className={'c-watch-head'}>

                    <img src={process.env.PUBLIC_URL + '/images/gent/watchheads/' + this.props.watchhead + '.png'} alt=""/>
                </div>

                <div className={'c-accessory'}>
                    <ul className="trackList">
                        { this.props.accessories.map((e, index) =>
                            <li key={index}>{e}</li>
                        ) }
                    </ul>
                </div>

                <div className={'c-lower-strap'}>

                    <img src={process.env.PUBLIC_URL + '/images/gent/lowerstraps/' + this.props.lowerstrap + '.png'} alt=""/>

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
) (Configurator);
