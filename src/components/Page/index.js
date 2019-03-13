import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from "react-redux";
import './styles.scss'

class Page extends Component {
    constructor(props) {
        super(props);

        props.onSetPage(this.props.currentPage);

      //  console.log(22);
    }

    getClassNames() {
        return classNames({
            'page': true,
            'page--prev': this.props.pageState[this.props.currentPage],
        });
    }
    getStyles() {
        return {
            color: this.props.color,
            background: this.props.background,
        }
    }
    render() {
        return (
            <section
                className={this.getClassNames()}
                style={this.getStyles()}>
                {this.props.children}
            </section>
        );
    }
}

export default connect(
    state => ({
        pageState: state.page,
    }),
    dispatch => ({
        onSetPage: (i) => {
            dispatch({type: 'SET_CURRENT', payload: i});
        }
    }),
    null,
    { pure: false }
) (Page);
