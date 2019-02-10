import React, {Component} from 'react';
import {connect} from 'react-redux';
import Pipe from 'components/Pipe'
import Page from 'components/Page'
import NextButton from 'components/NextButton'
import SingleWatchHeadItem from 'components/SingleItems/WatchHead'
import SingleUpperStrapItem from 'components/SingleItems/UpperStrap'
import SingleLowerStrapItem from 'components/SingleItems/LowerStrap'
import './styles.scss'

const NEXT_PAGE = '/watch-model';

class Home extends Component {
    render() {
        return (
            <Page color="#cc99ff" background="#25386f" prevPage={'home'} currentPage={'start-building'}>
                <Pipe color="#cc99ff" background="#25386f" topOffset={'300px'}>
                    <div className="pipe-element">
                        <div className="wow flipInY">
                            <NextButton nextPagePath={NEXT_PAGE} color={'#ffffff'} background={'#fb6311'} history={this.props.history}>
                                Own
                            </NextButton>
                        </div>
                    </div>
                    <div className="pipe-element">
                        <div className="wow flipInY">
                            <NextButton nextPagePath={NEXT_PAGE} color={'#FFFFFF'} background={'#9ed9e1'} history={this.props.history}>
                                your
                            </NextButton>
                        </div>
                    </div>
                    <div className="pipe-element">
                        <div className="wow flipInY">
                            <NextButton nextPagePath={NEXT_PAGE} color={'#FFFFFF'} background={'#3c217e'} history={this.props.history}>
                                design
                            </NextButton>
                        </div>
                    </div>
                </Pipe>

                <div className={'single-items-wrapper'}>
                    <SingleWatchHeadItem singleWatchmodel={'gent'} code={'HGW187_sa000_sr11a'} left={'62%'} top={'10%'} animationClassName={'flipInY'} />
                    <SingleWatchHeadItem singleWatchmodel={'new_gent'} code={'HSUOR111_sa000_sr11a'} left={'20%'} top={'65%'} animationClassName={'flipInY'} />
                    <SingleUpperStrapItem singleWatchmodel={'new_gent'} code={'ACM0025H12_sa000_sr11b'} left={'35%'} top={'4%'} animationClassName={'flipInY'} rotateDeg={90} />
                    <SingleUpperStrapItem singleWatchmodel={'new_gent'} code={'ACM0027H12_sa000_sr11b'} left={'75%'} top={'60%'} animationClassName={'flipInY'} rotateDeg={90} />
                    <SingleLowerStrapItem singleWatchmodel={'new_gent'} code={'ACM0006H6_sa000_sr11b'} left={'75%'} top={'45%'} animationClassName={'flipInY'} rotateDeg={90} />
                    <SingleLowerStrapItem singleWatchmodel={'new_gent'} code={'ACM0008H6_sa000_sr11b'} left={'8%'} top={'45%'} animationClassName={'flipInY'} />

                </div>
            </Page>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({}),
    null,
    { pure: false }
) (Home);
