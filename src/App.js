import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import withLayout from './Layout'
import Home from 'pages/Home'
import StartBuilding from 'pages/StartBuilding'
import WatchModel from 'pages/Choosers/WatchModel'
import WatchHead from 'pages/Choosers/WatchHead'
import UpperStrap from 'pages/Choosers/UpperStrap'
import LowerStrap from 'pages/Choosers/LowerStrap'
import Loop from 'pages/Choosers/Loop'
import Accessories from 'pages/Choosers/Accessories'
import Preview from 'pages/Preview'
import About from 'pages/About'

@withLayout
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scripts: {
                wow: '/libs/wow/wow.min.js' // TODO
            }
        }
    }

    componentWillMount() {
        let script = document.createElement('script');

        script.src = this.state.scripts.wow;
        script.async = true;

        script.onload = function() {
            new window.WOW().init();
        };

        document.body.appendChild(script);
    }

  render() {
        return (
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
            </Switch>
        );
  }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    { pure: false }
)(App);
