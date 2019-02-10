import React, {Component} from 'react';
import classNames from 'classnames';
import {connect} from "react-redux";
import './styles.scss'

class Page extends Component {
       constructor(props) {
        super(props);


        let curr = this.props.currentPage;
        let prev = this.props.prevPage;

        let isPrev = this.props.currentPage == this.props.pageState;

           console.log(curr, isPrev);

          // props.onSetPage(curr);


           //console.log(this.props.currentPage);
    }

    getIsPrev() {
        //console.log(this.props.currentPage , this.props.pageState);


        return this.props.currentPage !== this.props.pageState;
    }

    getClassNames() {


        let ps = this.getIsPrev();

        return classNames({
            'page': true,
            'page--prev': ps//this.props.pageState,
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
            dispatch({type: 'SET_PREV', payload: i});
        }
    }),
    null,
    { pure: false }
) (Page);
