import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import withLayout from './Layout'
import Home from 'pages/Home'
import StartBuilding from 'pages/StartBuilding'
import WatchModel from 'pages/WatchModel'
import WatchHead from 'pages/WatchHead'
import UpperStrap from 'pages/UpperStrap'
import LowerStrap from 'pages/LowerStrap'
import Loop from 'pages/Loop'
import Accessories from 'pages/Accessories'
import Preview from 'pages/Preview'
import About from 'pages/About'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

@withLayout
class App extends Component {
    componentWillMount() {
        new window.WOW().init();
    }

    render() {
        return (
            <Switch>
                <Route
                    render={({ location }) => {
                        const { pathname } = location;
                        return (
                            <TransitionGroup>
                                <CSSTransition
                                    key={pathname}
                                    classNames="page"
                                    timeout={{
                                        enter: 5000,
                                        exit: 5000,
                                    }}
                                >
                                    <Route
                                        location={location}
                                        render={() => (
                                        <Switch>
                                            <Route exact path='/' component={Home} />
                                            <Route exact path='/start-building' component={StartBuilding} />
                                            <Route exact path='/watch-model' component={WatchModel} />
                                            <Route exact path='/watch-head' component={WatchHead} />
                                            <Route exact path='/upper-strap' component={UpperStrap} />
                                            <Route exact path='/lower-strap' component={LowerStrap} />
                                            <Route exact path='/loop' component={Loop} />
                                            <Route exact path='/accessories' component={Accessories} />
                                            <Route exact path='/preview' component={Preview} />
                                            <Route path='/about' component={About} />
                                            <Route render={() => <div>NOT FOUND !</div>} />
                                        </Switch>
                                        )}
                                    />
                                </CSSTransition>
                            </TransitionGroup>
                        );
                    }}
                />
            </Switch>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    {pure: false}
) (App);
