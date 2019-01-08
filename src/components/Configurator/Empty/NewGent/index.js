import React, { Component } from 'react';

class NewGent extends Component {
    render() {
        return (
            <div className={ 'empty-shape empty-new-gent' }>


                <div>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/buckle.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/full_shadow.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/loop.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/mask.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/needle_hours.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/needle_minutes.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/needle_seconds.png'} alt=""/>
                    <img src={process.env.PUBLIC_URL + '/images/new_gent/empty/watch_black_logo.png'} alt=""/>

                </div>


            </div>
        );
    }
}

export default NewGent;
